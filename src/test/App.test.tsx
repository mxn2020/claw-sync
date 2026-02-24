import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../components/Header";
import ConnectionsPage from "../pages/ConnectionsPage";
import SyncJobsPage from "../pages/SyncJobsPage";
import ActivityPage from "../pages/ActivityPage";
import SchedulesPage from "../pages/SchedulesPage";
import SettingsPage from "../pages/SettingsPage";
function wrap(ui: React.ReactElement) { return render(<MemoryRouter>{ui}</MemoryRouter>); }
describe("Header", () => { it("renders", () => { wrap(<Header />); expect(screen.getByText("Connections")).toBeInTheDocument(); expect(screen.getByText("Sync Jobs")).toBeInTheDocument(); }); });
describe("ConnectionsPage", () => { it("renders", () => { wrap(<ConnectionsPage />); expect(screen.getAllByText("Connections").length).toBeGreaterThan(0); expect(screen.getByText("GitHub → OpenClaw Config")).toBeInTheDocument(); }); });
describe("SyncJobsPage", () => { it("renders", () => { wrap(<SyncJobsPage />); expect(screen.getByText("Sync Jobs")).toBeInTheDocument(); }); });
describe("ActivityPage", () => { it("renders", () => { wrap(<ActivityPage />); expect(screen.getByText("Activity")).toBeInTheDocument(); }); });
describe("SchedulesPage", () => { it("renders", () => { wrap(<SchedulesPage />); expect(screen.getByText("Schedules")).toBeInTheDocument(); }); });
describe("SettingsPage", () => { it("renders", () => { wrap(<SettingsPage />); expect(screen.getByText("Sync Defaults")).toBeInTheDocument(); }); });
