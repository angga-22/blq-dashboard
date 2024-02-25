// import { expect, test, vi } from "vitest";
// import { render, screen, waitFor } from "@testing-library/react";
// import Page, { IBannerData } from "../page";

// test("Dashboard rendered properly with data", async () => {
//   const mockData: IBannerData[] = [
//     {
//       mainBannerId: 1,
//       title: "Banner 1",
//       sort: 1,
//       pcImageUrl: "",
//       mobileImageUrl: "",
//       linkUrl: "",
//       startDate: new Date(),
//       endDate: new Date(),
//       creator: "",
//       updater: "",
//       deleter: null,
//       createdAt: new Date(),
//       updatedAt: null,
//       deletedAt: null,
//     },
//     {
//       mainBannerId: 2,
//       title: "Banner 2",
//       sort: 2,
//       pcImageUrl: "",
//       mobileImageUrl: "",
//       linkUrl: "",
//       startDate: new Date(),
//       endDate: new Date(),
//       creator: "",
//       updater: "",
//       deleter: null,
//       createdAt: new Date(),
//       updatedAt: null,
//       deletedAt: null,
//     },
//   ];

//   vi.spyOn(global, "fetch").mockResolvedValue({
//     json: vi.fn().mockResolvedValue(mockData),
//     status: 200,
//   } as unknown as Response);

//   render(<Page />);

//   // Wait for the data to be fetched and rendered
//   await waitFor(() => expect(screen.getByTestId("dashboard")).toBeDefined());

//   // Check if the data is displayed correctly
//   expect(screen.getByText("Banner 1")).toBeDefined();
//   expect(screen.getByText("Banner 2")).toBeDefined();

//   // Reset the mock to avoid affecting other tests
//   vi.restoreAllMocks();
// });
