import { GetListParams, GetOneParams, fetchUtils } from 'react-admin';
import { stringify } from 'query-string';
import { DataProvider } from 'react-admin';
import { RESOURCES_REQUIRING_FORM_DATA } from '@lib/src/constants';
import { RECURSE } from '@lib/src/admin/interface/Recurce';

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const { token } = JSON.parse(localStorage.getItem('auth') || '{}');
  options.headers.set('Authorization', `Bearer ${token}`);

  if (options.headers.get('Content-Type') === 'multipart/form-data') {
    options.headers.delete('Content-Type');
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider = {
  getList: async (resource: string, params: GetListParams) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage + (params.meta ? params.meta : 0), page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    let url;
    if (resource === 'user/google') {
      url = `${apiUrl}/${resource}`;
    } else {
      url = `${apiUrl}/${resource}?${stringify(query)}`;
    }

    const { json } = await httpClient(url);

    return {
      data: json.data,
      total: json.total,
    };
  },

  getOne: async (resource: string, params: GetOneParams) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    const data = resource === RECURSE.NEWS && !params.meta?.havePrevNextId ? json.data : json;
    return { data };
  },

  getMany: async (resource: string, params: { ids: any }) => {
    const query = {
      filter: JSON.stringify({ ids: params.ids }),
    };

    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { json } = await httpClient(url);

    return resource !== 'pages' ? { data: json } : { data: json.data };
  },

  getManyReference: async (resource: string, params: any) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id,
      }),
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    const { headers, json } = await httpClient(url);
    return {
      data: json,
      total: parseInt(headers.get('content-range')?.split('/').pop() || '0', 10),
    };
  },

  create: async (resource: any, params: { data: any }) => {
    let requestBody: string | FormData = JSON.stringify(params.data);
    const formData = new FormData();

    if (RESOURCES_REQUIRING_FORM_DATA.includes(resource)) {
      Object.entries(params.data).forEach(([key, value]: [string, any]) => {
        if (key === 'picture' || key === 'files' || key === 'pictures') {
          (Array.isArray(value) ? value : [value]).forEach((file: any) => {
            file && formData.append(key, file.rawFile ? new File([file.rawFile], file.title || '') : file);
          });
        } else if (typeof value === 'object' && value !== null) {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (subValue !== undefined && subValue !== null) {
              formData.append(
                `${key}[${subKey}]`,
                typeof subValue === 'object' ? JSON.stringify(subValue) : subValue.toString(),
              );
            }
          });
        } else {
          formData.append(key, value);
        }
      });

      requestBody = formData;
    }

    const { json, status } = await httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: requestBody,
    });

    return resource === 'check-answers' ? { data: json } : { data: { ...params.data, id: json.id, status } };
  },

  updateMany: async (resource: any, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  delete: (resource: string, params: any) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE',
    }).then(({ json }) => ({ data: json })),

  deleteMany: async (resource: string, params: any) => {
    const query = {
      filter: JSON.stringify({ id: params.ids }),
    };
    const { json } = await httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'DELETE',
      body: JSON.stringify(params.data),
    });
    return { data: json };
  },

  update: async (resource: any, params: any) => {
    let requestBody: string | FormData = JSON.stringify(params.data);
    const formData = new FormData();

    if (RESOURCES_REQUIRING_FORM_DATA.includes(resource)) {
      Object.entries(params.data).forEach(([key, value]: [string, any]) => {
        if (key === 'picture' || key === 'files' || key === 'pictures') {
          if (typeof value === 'string') {
            formData.append(key, '');
          } else {
            (Array.isArray(value) ? value : [value]).forEach((file: any) => {
              formData.append(key, file.rawFile ? new File([file.rawFile], file.title || '') : file);
            });
          }
        } else if (typeof value === 'object' && value !== null) {
          Object.entries(value).forEach(([subKey, subValue]) => {
            if (subValue !== undefined && subValue !== null) {
              formData.append(
                `${key}[${subKey}]`,
                typeof subValue === 'object' ? JSON.stringify(subValue) : subValue.toString(),
              );
            }
          });
        } else {
          formData.append(key, value);
        }
      });

      requestBody = formData;
    }

    const url = resource === 'user/edit-info' ? `${apiUrl}/${resource}` : `${apiUrl}/${resource}/${params.id}`;

    const { json } = await httpClient(url, {
      method: 'put',
      body: requestBody,
    });

    return { data: json };
  },
} as DataProvider;
