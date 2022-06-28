import { render, screen, fireEvent } from "@testing-library/react";
import { useSession, signIn } from "next-auth/react";
import { SubscribeButton } from ".";
import { mocked } from "jest-mock";
import { useRouter } from "next/router";

jest.mock("next-auth/react");
jest.mock("next/router");

describe("SubscribeButton Component", () => {
  const useSessionMocked = mocked(useSession);

  useSessionMocked.mockReturnValue({
    data: null,
    status: "unauthenticated",
  });

  it("renders correctly", () => {
    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe Now")).toBeInTheDocument();
  });

  it("redirects user to sign in when not authenticated", () => {
    const signInMocked = mocked(signIn);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe Now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });

  it("redirects to posts when users alredy has a subscription", () => {
    const useRouterMocked = mocked(useRouter);
    const useSessionMocked2 = mocked(useSession);
    const pushMocked = jest.fn();

    useSessionMocked2.mockReturnValueOnce({
      data: {
        user: {
          name: "John Snow",
          email: "john.snow@exemple.com",
        },
        expires: "fake-expires",
        activeSubscription: "fake-active-subscription",
      },
      status: "authenticated",
    });

    useRouterMocked.mockReturnValueOnce({
      push: pushMocked,
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe Now");

    fireEvent.click(subscribeButton);

    expect(pushMocked).toHaveBeenCalledWith("/posts");
  });
});
