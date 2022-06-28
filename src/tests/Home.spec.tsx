import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useSession } from "next-auth/react";
import Home, { getStaticProps } from "../pages";
import { stripe } from "../services/stripe";

jest.mock("next-auth/react");
jest.mock("next/router");
jest.mock("../services/stripe");

describe("Home page", () => {
  it("render correctly", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValue({
      data: null,
      status: "unauthenticated",
    });

    render(<Home product={{ priceId: "fakeId", amount: "R$10,00" }} />);

    expect(screen.getByText("for R$10,00 month")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const retriveStripePriceMoked = mocked(stripe.prices.retrieve);

    retriveStripePriceMoked.mockResolvedValueOnce({
      id: "fakeId",
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: "fakeId",
            amount: "$10.00",
          },
        },
      })
    );
  });
});
