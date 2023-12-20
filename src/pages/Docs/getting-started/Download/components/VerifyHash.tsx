import * as CodeSnippets from "./CodeSnippets";
import { SriHashLink } from "../../../components/Links";

export const Sha384 = () => <code>sha384</code>;
export const Description = () => (
  <p>
    Note that you should compare same length hashes{","} e.g. <Sha384 /> with{" "}
    <Sha384 />
    {","} otherwise it{"'"}s expected for them to be different. As such{","} you
    can use an online tool like <SriHashLink /> to make sure that the hashes are
    the same for a given file.Alternatively{","} assuming you have OpenSSL
    installed{","} you can achieve the same from the CLI{","} for example{":"}
  </p>
);

export const VerifyHash = () => (
  <>
    <Description />
    <CodeSnippets.OpenSslSnippet />
  </>
);
