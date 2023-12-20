import { Link } from "../../../../../../../../components/Link/Link";
import { DiscordAndReddit } from "./DiscordAndReddit";
import { ExploreGithubDiscussions } from "./ExploreGithubDiscussions";
import { FollowUsOnTwitter } from "./FollowUsOnTwitter";
import { IRCServer } from "./IRCServer";
import { OfficialBlog } from "./OfficialBlog";
import { TaggingPlugins } from "./TaggingPlugins";
import { TaggingQuestions } from "./TaggingQuestions";

export const Community = () => (
  <>
    <h2 id="community">
      Community{" "}
      <Link
        className="anchor-link"
        href="#community"
        aria-label="Link to this section: Community"
      ></Link>
    </h2>
    <p>
      Stay up-to-date on the development of Bootstrap and reach out to the
      community with these helpful resources.
    </p>
    <ul>
      <OfficialBlog as="li" />
      <ExploreGithubDiscussions />
      <DiscordAndReddit as="li" />
      <IRCServer />
      <TaggingQuestions as="li" />
      <TaggingPlugins as="li" />
    </ul>
    <FollowUsOnTwitter />
  </>
);
