import { DisposeMethod } from "./DisposeMethod";
import { MethodCallOnTransitioningElSnippet } from "./MethodCallOnTransitioningElSnippet";
import { TransitionEventListener } from "./TransitionEventListener";

export const AsyncFunctionsAndTransitions = () => (
  <>
    <h3 id="asynchronous-functions-and-transitions">
      Asynchronous functions and transitions{" "}
      <a
        className="anchor-link"
        href="#asynchronous-functions-and-transitions"
        aria-label="Link to this section: Asynchronous functions and transitions"
      ></a>
    </h3>
    <p>
      All programmatic API methods are <strong>asynchronous</strong> and return
      to the caller once the transition is started, but{" "}
      <strong>before it ends</strong>. In order to execute an action once the
      transition is complete, you can listen to the corresponding event.
    </p>
    <TransitionEventListener />
    <p>
      In addition, a method call on a{" "}
      <strong>transitioning component will be ignored</strong>.
    </p>
    <MethodCallOnTransitioningElSnippet />
    <DisposeMethod />
  </>
);
