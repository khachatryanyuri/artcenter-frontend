export interface IExamProcedureProps {
  title: { arm?: string; rus?: string; eng?: string };
  content: { arm?: string; rus?: string; eng?: string };
  fileName: string;
  buttonText: string;
  isTheoretical?: boolean;
}
