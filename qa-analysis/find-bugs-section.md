# Bugs Found – Recommendation Output Review

## Selected Hotel (Baseline)
- **Name:** Skyline Business Hotel  
- **Total Price:** ₹21,000  
- **Star Rating:** 4★  
- **Review Score:** 8.3  
- **Review Count:** 1,240  

---

## Critical Violations Identified

### 1. Distance Rule Violation
- **Hotel:** Comet Residency  
- **Observed:** Distance = 5.8 km  
- **Expected:** Distance ≤ 5 km  
- **Result:** ❌ Candidate should have been excluded.

---

### 2. Price Rule Violation
- **Hotel:** Zenith Inn  
- **Observed:** Total price = ₹22,400  
- **Expected:** Candidate total price must be cheaper than ₹21,000  
- **Result:** ❌ Candidate incorrectly included.

---

### 3. Currency Mismatch
- **Hotel:** Vertex Corporate Rooms  
- **Observed:** Total price displayed as $18,900 (USD)  
- **Expected:** Comparable pricing currency (INR) before evaluation  
- **Result:** ❌ Price comparison is invalid.

---

### 4. Invalid Review Score
- **Hotel:** Nexus Park Hotel  
- **Observed:** Review score = 10.8  
- **Expected:** Review score should be within the valid scale (0–10)  
- **Result:** ❌ Score calculation and ranking are unreliable.

---

### 5. Duplicate Hotel Entry
- **Hotel:** Orbit Executive Stay  
- **Observed:** Appears twice in the recommendation list  
- **Expected:** Each hotel should appear only once  
- **Result:** ❌ Duplicate entry reduces recommendation quality.

---

### 6. Selected Hotel Included in Recommendations
- **Hotel:** Skyline Business Hotel  
- **Observed:** Selected hotel appears in the recommendation list  
- **Expected:** Selected hotel must be excluded from recommendations  
- **Result:** ❌ Explicit exclusion rule violated.

---

### 7. Incorrect “Why Recommended” Tags
- **Zenith Inn**
  - **Observed Tag:** “Cheaper”
  - **Issue:** Hotel is more expensive than selected hotel  
- **Nexus Park Hotel**
  - **Observed Tag:** “Highest score”
  - **Issue:** Review score is invalid (10.8)  

**Result:** ❌ Recommendation explanations are misleading.

---

### 8. Better Rule Potentially Broken
- **Hotel:** Metro Suites  
- **Observed:** Review score = 8.5 vs Selected = 8.3  
- **Issue:** Amenity match contribution is unclear or not validated  
- **Result:** ⚠️ Cannot confirm whether `candidate_score > selected_score` rule was correctly applied.

---

## Overall Impact

- Multiple candidates violate core eligibility rules.
- Invalid data is included in ranking calculations.
- Recommendation ordering cannot be trusted.
- The final Top 10 list is not reliable and should not be shown to users in its current state.

**Severity:** High  
**Recommendation:** Block release until data validation and rule enforcement are fixed.
