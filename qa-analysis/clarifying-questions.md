# Clarifying Questions for Product / Engineering

1. **Currency Handling**
   - How should total prices be compared when candidate and selected hotels are returned in different currencies (e.g., INR vs USD)?
   - Should candidates be excluded if currency conversion is not available, or should conversion be applied using a fixed FX source and rate?

2. **Missing or Invalid Review Scores**
   - What is the expected behavior if a candidate hotel has a missing, null, or out-of-range review score (e.g., 10.8)?
   - Should such hotels be excluded, or should a default or capped value be applied?

3. **Amenity Match Percentage Calculation**
   - How exactly should `amenity_match_percent` be calculated (equal weight per amenity vs weighted by importance)?
   - What should be the fallback behavior if amenity data is missing or incomplete for a candidate hotel?

4. **Better Rule Enforcement**
   - Is the “better” condition strictly enforced as `candidate_score > selected_score`, or can exceptions be made (e.g., higher star rating but marginally lower score)?
   - Should the system exclude candidates where the score comparison cannot be confidently computed?

5. **Ranking Tie Handling**
   - If multiple candidates are tied on all ranking fields (ScoreDelta, total price, distance, review count), how should the final ordering be determined?
   - Is deterministic ordering required for repeatability?

6. **Inventory Freshness**
   - Is there a freshness threshold for inventory and pricing data (e.g., last updated within X minutes)?
   - Should candidates with stale inventory data be excluded or flagged before recommendation?

7. **Duplicate Hotel Records**
   - Should duplicate hotel entries (same hotel ID appearing multiple times) be deduplicated before ranking?
   - If duplicates differ slightly in price or inventory, which record should be treated as authoritative?

8. **“Why Recommended” Tag Generation**
   - Are “Why recommended” tags derived automatically from rule evaluation (price, score, distance), or are they manually curated?
   - What validation exists to ensure tags do not contradict actual data (e.g., “Cheaper” on a more expensive hotel)?
