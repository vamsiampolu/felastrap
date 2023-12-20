export type TextToken = {
  token: string;
};

export type TextTokenProps = {
  tokens: TextToken[];
};

export const TextLine = ({ tokens = [] }: TextTokenProps) => (
  <span className="line">
    <span className="cl">
      {tokens.map(({ token }, index) => (
        <span key={`text-token-${index}`}>{token}</span>
      ))}
    </span>
  </span>
);
