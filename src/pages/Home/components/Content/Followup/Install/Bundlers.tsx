import { useFela } from "react-fela";

import {
  DivProps,
  ImageProps,
  SpanProps,
} from "../../../../../../components/common";
import { Link, LinkProps } from "../../../../../../components/Link/Link";

import webpackIcon from "../../../../../../assets/webpack.svg";
import parcelIcon from "../../../../../../assets/parcel.png";
import viteIcon from "../../../../../../assets/vite.svg";

const bundlerRowRule = () => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "1.5rem",
  marginTop: "1.5rem",
});

const bundlerIconRule = () => ({
  display: "block",
  marginBottom: "0.5rem",
  transition: "transform 0.2s ease-in-out",
  verticalAlign: "middle",
});
const Icon = ({
  className = "",
  src,
  alt,
  width = 72,
  height = 72,
  loading = "lazy",
}: ImageProps) => {
  const { css } = useFela();
  return (
    <img
      className={`${css(bundlerIconRule)} bundler-icon ${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
    />
  );
};

export const Label = ({ children }: SpanProps) => {
  const { css } = useFela();
  return (
    <span className={css({ color: "rgba(33, 37, 41, 0.75)" })}>{children}</span>
  );
};

const bundlerColumnRule = () => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
});
export const Bundler = ({ href, children }: LinkProps) => {
  const { css } = useFela();
  return (
    <Link className={`${css(bundlerColumnRule)} bundler-column`} href={href}>
      {children}
    </Link>
  );
};

export const Bundlers = ({ children }: DivProps) => {
  const { css } = useFela();
  return <div className={css(bundlerRowRule)}>{children}</div>;
};

export const BundlerGuides = () => {
  return (
    <Bundlers>
      <Bundler href="/docs/5.3/getting-started/webpack">
        <Icon className="webpack-icon" src={webpackIcon} />
        <Label>Webpack</Label>
      </Bundler>
      <Bundler href="/docs/5.3/getting-started/parcel">
        <Icon className="parcel-icon" src={parcelIcon} />
        <Label>Parcel</Label>
      </Bundler>
      <Bundler href="/docs/5.3/getting-started/vite">
        <Icon className="vite-icon" src={viteIcon} />
        <Label>Vite</Label>
      </Bundler>
    </Bundlers>
  );
};
