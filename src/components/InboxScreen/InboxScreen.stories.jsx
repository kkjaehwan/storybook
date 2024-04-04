import InboxScreen from "./InboxScreen";
import { rest } from "msw";
import { Provider } from "react-redux";
import { MockedState } from "@components/TaskList/TaskList.stories";
import store from "@lib/store";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (req, res, ctx) => {
            return res(ctx.json(MockedState.tasks));
          },
        ),
      ],
    },
  },
};
export const Error = {
  parameters: {
    msw: {
      handlers: [
        rest.get(
          "https://jsonplaceholder.typicode.com/todos?userId=1",
          (req, res, ctx) => {
            return res(ctx.status(403));
          },
        ),
      ],
    },
  },
};
