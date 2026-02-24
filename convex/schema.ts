import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
export default defineSchema({
  connections: defineTable({ name: v.string(), source: v.string(), target: v.string(), status: v.string(), lastSync: v.string(), itemsSynced: v.number() }),
  syncJobs: defineTable({ connectionId: v.id("connections"), status: v.string(), items: v.number(), duration: v.string(), startedAt: v.string() }).index("by_connection", ["connectionId"]),
  schedules: defineTable({ connectionId: v.id("connections"), cron: v.string(), enabled: v.boolean(), nextRun: v.string() }),
});
