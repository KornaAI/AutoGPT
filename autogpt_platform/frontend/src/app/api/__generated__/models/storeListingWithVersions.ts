/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * AutoGPT Agent Server
 * This server is used to execute agents that are created by the AutoGPT system.
 * OpenAPI spec version: 0.1
 */
import type { StoreListingWithVersionsActiveVersionId } from "./storeListingWithVersionsActiveVersionId";
import type { StoreListingWithVersionsCreatorEmail } from "./storeListingWithVersionsCreatorEmail";
import type { StoreListingWithVersionsLatestVersion } from "./storeListingWithVersionsLatestVersion";
import type { StoreSubmission } from "./storeSubmission";

/**
 * A store listing with its version history
 */
export interface StoreListingWithVersions {
  listing_id: string;
  slug: string;
  agent_id: string;
  agent_version: number;
  active_version_id?: StoreListingWithVersionsActiveVersionId;
  has_approved_version?: boolean;
  creator_email?: StoreListingWithVersionsCreatorEmail;
  latest_version?: StoreListingWithVersionsLatestVersion;
  versions?: StoreSubmission[];
}
