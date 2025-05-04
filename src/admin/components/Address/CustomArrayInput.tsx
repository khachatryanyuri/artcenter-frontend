import { Box } from '@mui/material';
import { useInput, useRecordContext, NumberInput } from 'react-admin';

export const CustomArrayInput = ({ source, xAxis, yAxis }: { source: string; xAxis: string; yAxis: string }) => {
  const {
    field: { onChange, value },
  } = useInput({ source });
  const record = useRecordContext();

  const arrayValue = value || (record ? record[source] : [0, 0]) || [0, 0];

  const handleChange = (index: number, newValue: number) => {
    const newArrayValue = [...arrayValue];
    newArrayValue[index] = newValue;
    onChange(newArrayValue);
  };

  return (
    <Box sx={{ display: 'flex', gap: '36px' }}>
      <NumberInput
        source={`${source}[0]`}
        label={xAxis}
        value={arrayValue[0]}
        onChange={(e) => handleChange(0, parseInt(e.target.value, 10))}
        required
      />
      <NumberInput
        source={`${source}[1]`}
        label={yAxis}
        value={arrayValue[1]}
        onChange={(e) => handleChange(1, parseInt(e.target.value, 10))}
        required
      />
    </Box>
  );
};
