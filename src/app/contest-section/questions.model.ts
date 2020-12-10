export interface Questions  {
  questionId: string;
  questionText: string;
  options: [
    {
      optionValue: string;
      optionText: string;
    },
    {
      optionValue: string;
      optionText: string;
    },
    {
      optionValue: string;
      optionText: string;
    },
    {
      optionValue: string;
      optionText: string;
    }
  ];
  expectedOpt: string;
}
