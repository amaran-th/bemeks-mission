export interface Information {
  id: number;
  content: string;
}

export interface InformationData {
  payload: Information[];
  success: boolean;
}

export interface WorkPermitRow {
  trans: number;
  transId: number;
  work_type: string;
  work_detail_type: string;
  status: string;
  work_title: string;
  work_exec: string;
  work_team: string;
  work_div: string;
  inspection_team: string[];
  inspection_div: string[];
  approval_team: string;
  approval_section: string;
  plan_period: string;
  permit_period: string;
  actual_period: string;
  work_difficulty: string;
  env_risk: string;
  criticality: string;
  hazard_type: string;
  scaffold_work: string;
  chemical_work: string;
  isolation_work: string;
  interlock_bypass: string;
  permit_doc_number: string;
  num_worker: number;
  work_hours: number;
  total_man_hours: number;
  work_order_number: string;
  pm_type: string;
  rts_number: string;
  work_equipment: string[];
  work_progress: string;
}

export interface WorkPermitRowData {
  payload: { totalCount: number; list: WorkPermitRow[] };
  success: boolean;
}
