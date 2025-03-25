import mongoose from "mongoose";

const CreateJobSchema = new mongoose.Schema({
  brand_code: {
    type: String,
    default: "",
  },
  oracle_code: {
    type: String,
    default: "",
  },
  store_contact: {
    type: String,
    default: "",
  },
  email_id: {
    type: String,
    default: "",
  },
  ejar_date: {
    type: String,
    default: "",
  },
  brand_name: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  city: {
    type: String,
    default: "",
  },
  province: {
    type: String,
    default: "",
  },
  unit: {
    type: String,
    default: "",
  },
  area_sq: {
    type: String,
    default: "",
  },
  level: {
    type: String,
    default: "",
  },
  segment: {
    type: String,
    default: "",
  },
  country: {
    type: String,
    default: "",
  },
  region: {
    type: String,
    default: "",
  },
  brand_approval: {
    type: String,
    default: "",
  },
  lease_starting_date_g: {
    type: String,
    default: "",
  },
  lease_expiring_date_g: {
    type: String,
    default: "",
  },
  lease_starting_date_h: {
    type: String,
    default: "",
  },
  lease_expiring_date_h: {
    type: String,
    default: "",
  },
  lease_expiry: {
    type: String,
    default: "",
  },
  exit_clause: {
    type: String,
    default: "",
  },
  penalty_clause: {
    type: String,
    default: "",
  },
  rent_starting_date: {
    type: String,
    default: "",
  },
  payment_terms: {
    type: String,
    default: "",
  },
  electricity_meter: {
    type: String,
    default: "",
  },
  water_meter: {
    type: String,
    default: "",
  },
  rent_as_sales: {
    type: String,
    default: "",
  },
  base_rent: {
    type: String,
    default: "",
  },
  leasing_remark: {
    type: String,
    default: "",
  },
  year: {
    type: String,
    default: "",
  },
  lease_term: {
    type: String,
    default: "",
  },
  unit_handover_core: {
    type: String,
    default: "",
  },
  utility: {
    type: String,
    default: "",
  },
  tenancy_clause: {
    type: String,
    default: "",
  },
  exit_clause_notice_period: {
    type: String,
    default: "",
  },
  fitout_free_period: {
    type: String,
    default: "",
  },
  service_chgs: {
    type: String,
    default: "",
  },
  electricity_or_water: {
    type: String,
    default: "",
  },
  marketing: {
    type: String,
    default: "",
  },
  total_rent: {
    type: String,
    default: "",
  },
  security_dep: {
    type: String,
    default: "",
  },
  key_money: {
    type: String,
    default: "",
  },
  base_rent_m2: {
    type: String,
    default: "",
  },
  service_m2: {
    type: String,
    default: "",
  },
  elc_or_cw_m2: {
    type: String,
    default: "",
  },
  discount: {
    type: String,
    default: "",
  },
  discount_period: {
    type: String,
    default: "",
  },
  escalation: {
    type: String,
    default: "",
  },
  vendor_registration: {
    type: String,
    default: "",
  },
  landlord_details: {
    type: String,
    default: "",
  },
  country_head: {
    type: String,
    default: "",
  },
  regional_head: {
    type: String,
    default: "",
  },
  operational_manager: {
    type: String,
    default: "",
  },
  brand_manager: {
    type: String,
    default: "",
  },
  area_manager: {
    type: String,
    default: "",
  },
  latitude: {
    type: String,
    default: "",
  },
  longitude: {
    type: String,
    default: "",
  },
  type_of_job: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    default: "",
  },
  store_code: {
    type: String,
    default: "",
  },
  brand_code_project: {
    type: String,
    default: "",
  },
  mall_name: {
    type: String,
    default: "",
  },
  mall_handover_date: {
    type: String,
    default: "",
  },
  fitout_start_date: {
    type: String,
    default: "",
  },
  status_of_job: {
    type: String,
    default: "",
  },
  expected_completion_date: {
    type: String,
    default: "",
  },
  actual_fitout_completion_date: {
    type: String,
    default: "",
  },
  expected_opening_date: {
    type: String,
    default: "",
  },
  actual_opening_date: {
    type: String,
    default: "",
  },
  expected_opening_qtr: {
    type: String,
    default: "",
  },
  actual_opening_qtr: {
    type: String,
    default: "",
  },
  expected_opening_month: {
    type: String,
    default: "",
  },
  actual_opening_month: {
    type: String,
    default: "",
  },
  expected_opening_week: {
    type: String,
    default: "",
  },
  actual_opening_week: {
    type: String,
    default: "",
  },
  rent_start_date: {
    type: String,
    default: "",
  },
  fitout_free_period_as_per_leasing: {
    type: String,
    default: "",
  },
  days_saved: {
    type: String,
    default: "",
  },
  lag_start: {
    type: String,
    default: "",
  },
  lag_finished: {
    type: String,
    default: "",
  },
  today_lag: {
    type: String,
    default: "",
  },
  lag_remarks: {
    type: String,
    default: "",
  },
  active_fitout_aging: {
    type: String,
    default: "",
  },
  avg_business: {
    type: String,
    default: "",
  },
  business_saved: {
    type: String,
    default: "",
  },
  rent: {
    type: String,
    default: "",
  },
  total_rent_saved: {
    type: String,
    default: "",
  },
  capex_saves: {
    type: String,
    default: "",
  },
  total_saving: {
    type: String,
    default: "",
  },
  proposed_budget: {
    type: String,
    default: "",
  },
  cost_per_sqm_proposed: {
    type: String,
    default: "",
  },
  approved_budget: {
    type: String,
    default: "",
  },
  cost_per_sqm_approved: {
    type: String,
    default: "",
  },
  actual_budget: {
    type: String,
    default: "",
  },
  cost_per_sqm_actual: {
    type: String,
    default: "",
  },
  total_cost_saving: {
    type: String,
    default: "",
  },
  total_cost_saving_percent: {
    type: String,
    default: "",
  },
  contractor: {
    type: String,
    default: "",
  },
  contractor_value: {
    type: String,
    default: "",
  },
  fitout_commitment: {
    type: String,
    default: "",
  },
  remarks: {
    type: String,
    default: "",
  },
  contractor_scope: {
    type: String,
    default: "",
  },
  penalty_clause_con: {
    type: String,
    default: "",
  },
  site_handover_img: {
    type: String,
    default: "",
  },
  store_opening_img: {
    type: String,
    default: "",
  },
  lease_additional_file: {
    type: String,
    default: "",
  },
  cd_certificate: {
    type: String,
    default: "",
  },
  baldia_approval: {
    type: String,
    default: "",
  },
  economic_dep_approval: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["draft", "pending", "approved"],
    default: "draft",
  },
  status_history: {
    type: Array,
    default: "",
  },
});

export const CreateJob = mongoose.model("createjob", CreateJobSchema);
