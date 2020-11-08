export type SourceType = 'SYSTEM' | 'CUSTOM';
export type FieldType = 'DROPDOWN' | 'DATE';

export interface DataSourceOption {
  id: string;
  slug: string;
  label: string;
}

export interface FormField {
  id: string;
  source: SourceType;
  type: FieldType;
  label: string;
  slug: string;
  placeholder: string;
  datasource?: {
    options: DataSourceOption[]
  },
  is_required: boolean;
  metadata: {
    class: string;
  }
  meta_data?: {
    min_length: number;
    max_length: number;
    pattern: boolean;
    style: {
      "background": string;
    }
  }
}

export interface FormFieldGroup {
  label: string;
  fields: FormField[];
}

export interface FormTabConfig {
  label: string;
  field_groups: FormFieldGroup[]
}

export interface FormConfigResp {
  config: {
    nav_tabs: FormTabConfig[]
  }
}
