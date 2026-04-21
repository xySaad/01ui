import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  float8: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "audit" */
export type Audit = {
  __typename?: 'audit';
  attrs: Scalars['jsonb']['output'];
  auditedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  auditor?: Maybe<User_Public_View>;
  auditorId: Scalars['Int']['output'];
  auditorLogin?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['timestamptz']['output']>;
  closureMessage?: Maybe<Scalars['String']['output']>;
  closureType?: Maybe<Audit_Closure_Type_Enum>;
  createdAt: Scalars['timestamptz']['output'];
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  group: Group;
  groupId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  private?: Maybe<Audit_Private>;
  /** An object relationship */
  result?: Maybe<Result>;
  resultId?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  version?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "audit" */
export type AuditAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "audit" */
export type Audit_Aggregate = {
  __typename?: 'audit_aggregate';
  aggregate?: Maybe<Audit_Aggregate_Fields>;
  nodes: Array<Audit>;
};

export type Audit_Aggregate_Bool_Exp = {
  count?: InputMaybe<Audit_Aggregate_Bool_Exp_Count>;
};

export type Audit_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Audit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Audit_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "audit" */
export type Audit_Aggregate_Fields = {
  __typename?: 'audit_aggregate_fields';
  avg?: Maybe<Audit_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Audit_Max_Fields>;
  min?: Maybe<Audit_Min_Fields>;
  stddev?: Maybe<Audit_Stddev_Fields>;
  stddev_pop?: Maybe<Audit_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Audit_Stddev_Samp_Fields>;
  sum?: Maybe<Audit_Sum_Fields>;
  var_pop?: Maybe<Audit_Var_Pop_Fields>;
  var_samp?: Maybe<Audit_Var_Samp_Fields>;
  variance?: Maybe<Audit_Variance_Fields>;
};


/** aggregate fields of "audit" */
export type Audit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Audit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "audit" */
export type Audit_Aggregate_Order_By = {
  avg?: InputMaybe<Audit_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Audit_Max_Order_By>;
  min?: InputMaybe<Audit_Min_Order_By>;
  stddev?: InputMaybe<Audit_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Audit_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Audit_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Audit_Sum_Order_By>;
  var_pop?: InputMaybe<Audit_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Audit_Var_Samp_Order_By>;
  variance?: InputMaybe<Audit_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Audit_Avg_Fields = {
  __typename?: 'audit_avg_fields';
  auditorId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  resultId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "audit" */
export type Audit_Avg_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "audit". All fields are combined with a logical 'AND'. */
export type Audit_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Bool_Exp>>;
  _not?: InputMaybe<Audit_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Bool_Exp>>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  auditedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  auditor?: InputMaybe<User_Public_View_Bool_Exp>;
  auditorId?: InputMaybe<Int_Comparison_Exp>;
  auditorLogin?: InputMaybe<String_Comparison_Exp>;
  closedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  closureMessage?: InputMaybe<String_Comparison_Exp>;
  closureType?: InputMaybe<Audit_Closure_Type_Enum_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  endAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  grade?: InputMaybe<Numeric_Comparison_Exp>;
  group?: InputMaybe<Group_Bool_Exp>;
  groupId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  private?: InputMaybe<Audit_Private_Bool_Exp>;
  result?: InputMaybe<Result_Bool_Exp>;
  resultId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

export enum Audit_Closure_Type_Enum {
  AutoFailed = 'autoFailed',
  Canceled = 'canceled',
  Expired = 'expired',
  Failed = 'failed',
  Invalidated = 'invalidated',
  Reassigned = 'reassigned',
  Succeeded = 'succeeded',
  Unused = 'unused'
}

/** Boolean expression to compare columns of type "audit_closure_type_enum". All fields are combined with logical 'AND'. */
export type Audit_Closure_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Audit_Closure_Type_Enum>;
  _in?: InputMaybe<Array<Audit_Closure_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Audit_Closure_Type_Enum>;
  _nin?: InputMaybe<Array<Audit_Closure_Type_Enum>>;
};

/** aggregate max on columns */
export type Audit_Max_Fields = {
  __typename?: 'audit_max_fields';
  auditedAt?: Maybe<Scalars['timestamptz']['output']>;
  auditorId?: Maybe<Scalars['Int']['output']>;
  auditorLogin?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['timestamptz']['output']>;
  closureMessage?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  resultId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "audit" */
export type Audit_Max_Order_By = {
  auditedAt?: InputMaybe<Order_By>;
  auditorId?: InputMaybe<Order_By>;
  closedAt?: InputMaybe<Order_By>;
  closureMessage?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Audit_Min_Fields = {
  __typename?: 'audit_min_fields';
  auditedAt?: Maybe<Scalars['timestamptz']['output']>;
  auditorId?: Maybe<Scalars['Int']['output']>;
  auditorLogin?: Maybe<Scalars['String']['output']>;
  closedAt?: Maybe<Scalars['timestamptz']['output']>;
  closureMessage?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  resultId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "audit" */
export type Audit_Min_Order_By = {
  auditedAt?: InputMaybe<Order_By>;
  auditorId?: InputMaybe<Order_By>;
  closedAt?: InputMaybe<Order_By>;
  closureMessage?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "audit". */
export type Audit_Order_By = {
  attrs?: InputMaybe<Order_By>;
  auditedAt?: InputMaybe<Order_By>;
  auditor?: InputMaybe<User_Public_View_Order_By>;
  auditorId?: InputMaybe<Order_By>;
  auditorLogin?: InputMaybe<Order_By>;
  closedAt?: InputMaybe<Order_By>;
  closureMessage?: InputMaybe<Order_By>;
  closureType?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  group?: InputMaybe<Group_Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  private?: InputMaybe<Audit_Private_Order_By>;
  result?: InputMaybe<Result_Order_By>;
  resultId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** columns and relationships of "audit_private" */
export type Audit_Private = {
  __typename?: 'audit_private';
  /** An object relationship */
  audit?: Maybe<Audit>;
  code?: Maybe<Scalars['String']['output']>;
};

/** Boolean expression to filter rows from the table "audit_private". All fields are combined with a logical 'AND'. */
export type Audit_Private_Bool_Exp = {
  _and?: InputMaybe<Array<Audit_Private_Bool_Exp>>;
  _not?: InputMaybe<Audit_Private_Bool_Exp>;
  _or?: InputMaybe<Array<Audit_Private_Bool_Exp>>;
  audit?: InputMaybe<Audit_Bool_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "audit_private". */
export type Audit_Private_Order_By = {
  audit?: InputMaybe<Audit_Order_By>;
  code?: InputMaybe<Order_By>;
};

/** select columns of table "audit_private" */
export enum Audit_Private_Select_Column {
  /** column name */
  Code = 'code'
}

/** Streaming cursor of the table "audit_private" */
export type Audit_Private_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Private_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Private_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
};

/** select columns of table "audit" */
export enum Audit_Select_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  AuditedAt = 'auditedAt',
  /** column name */
  AuditorId = 'auditorId',
  /** column name */
  ClosedAt = 'closedAt',
  /** column name */
  ClosureMessage = 'closureMessage',
  /** column name */
  ClosureType = 'closureType',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  Grade = 'grade',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  ResultId = 'resultId',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  Version = 'version'
}

/** aggregate stddev on columns */
export type Audit_Stddev_Fields = {
  __typename?: 'audit_stddev_fields';
  auditorId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  resultId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "audit" */
export type Audit_Stddev_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Audit_Stddev_Pop_Fields = {
  __typename?: 'audit_stddev_pop_fields';
  auditorId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  resultId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "audit" */
export type Audit_Stddev_Pop_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Audit_Stddev_Samp_Fields = {
  __typename?: 'audit_stddev_samp_fields';
  auditorId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  resultId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "audit" */
export type Audit_Stddev_Samp_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "audit" */
export type Audit_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Audit_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Audit_Stream_Cursor_Value_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  auditedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  auditorId?: InputMaybe<Scalars['Int']['input']>;
  closedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  closureMessage?: InputMaybe<Scalars['String']['input']>;
  closureType?: InputMaybe<Audit_Closure_Type_Enum>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  endAt?: InputMaybe<Scalars['timestamptz']['input']>;
  grade?: InputMaybe<Scalars['numeric']['input']>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  resultId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Audit_Sum_Fields = {
  __typename?: 'audit_sum_fields';
  auditorId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  resultId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "audit" */
export type Audit_Sum_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Audit_Var_Pop_Fields = {
  __typename?: 'audit_var_pop_fields';
  auditorId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  resultId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "audit" */
export type Audit_Var_Pop_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Audit_Var_Samp_Fields = {
  __typename?: 'audit_var_samp_fields';
  auditorId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  resultId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "audit" */
export type Audit_Var_Samp_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Audit_Variance_Fields = {
  __typename?: 'audit_variance_fields';
  auditorId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  resultId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "audit" */
export type Audit_Variance_Order_By = {
  auditorId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  resultId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'event';
  campus?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  children: Array<Event>;
  /** An aggregate relationship */
  children_aggregate: Event_Aggregate;
  /** An array relationship */
  cohorts: Array<Label>;
  /** An aggregate relationship */
  cohorts_aggregate: Label_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  description?: Maybe<Scalars['String']['output']>;
  endAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregate relationship */
  groups_aggregate: Group_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  matches: Array<Match>;
  /** An aggregate relationship */
  matches_aggregate: Match_Aggregate;
  /** An object relationship */
  object: Object;
  /** An array relationship */
  objectAvailabilities: Array<Object_Availability>;
  /** An aggregate relationship */
  objectAvailabilities_aggregate: Object_Availability_Aggregate;
  objectId: Scalars['Int']['output'];
  /** An object relationship */
  parent?: Maybe<Event>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  processedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An array relationship */
  progresses: Array<Progress>;
  /** An array relationship */
  progressesByEventid: Array<Progress>;
  /** An aggregate relationship */
  progressesByEventid_aggregate: Progress_Aggregate;
  /** An aggregate relationship */
  progresses_aggregate: Progress_Aggregate;
  /** An array relationship */
  registrations: Array<Registration>;
  /** An aggregate relationship */
  registrations_aggregate: Registration_Aggregate;
  /** An array relationship */
  results: Array<Result>;
  /** An aggregate relationship */
  results_aggregate: Result_Aggregate;
  startAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  tasks: Array<Task>;
  /** An array relationship */
  users: Array<Event_User_View>;
  /** An array relationship */
  usersRelation: Array<Event_User>;
  /** An aggregate relationship */
  usersRelation_aggregate: Event_User_Aggregate;
  /** An aggregate relationship */
  users_aggregate: Event_User_View_Aggregate;
  /** An array relationship */
  xps: Array<Xp_View>;
};


/** columns and relationships of "event" */
export type EventChildrenArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventChildren_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventCohortsArgs = {
  distinct_on?: InputMaybe<Array<Label_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_Order_By>>;
  where?: InputMaybe<Label_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventCohorts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_Order_By>>;
  where?: InputMaybe<Label_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventGroupsArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventMatchesArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventObjectAvailabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventObjectAvailabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventProgressesArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventProgressesByEventidArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventProgressesByEventid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventProgresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventRegistrationsArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventRegistrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventResultsArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventResults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventUsersArgs = {
  distinct_on?: InputMaybe<Array<Event_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_View_Order_By>>;
  where?: InputMaybe<Event_User_View_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventUsersRelationArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventUsersRelation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_View_Order_By>>;
  where?: InputMaybe<Event_User_View_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventXpsArgs = {
  distinct_on?: InputMaybe<Array<Xp_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Xp_View_Order_By>>;
  where?: InputMaybe<Xp_View_Bool_Exp>;
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  __typename?: 'event_aggregate';
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

export type Event_Aggregate_Bool_Exp = {
  count?: InputMaybe<Event_Aggregate_Bool_Exp_Count>;
};

export type Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  __typename?: 'event_aggregate_fields';
  avg?: Maybe<Event_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
  stddev?: Maybe<Event_Stddev_Fields>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Fields>;
  sum?: Maybe<Event_Sum_Fields>;
  var_pop?: Maybe<Event_Var_Pop_Fields>;
  var_samp?: Maybe<Event_Var_Samp_Fields>;
  variance?: Maybe<Event_Variance_Fields>;
};


/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "event" */
export type Event_Aggregate_Order_By = {
  avg?: InputMaybe<Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_Max_Order_By>;
  min?: InputMaybe<Event_Min_Order_By>;
  stddev?: InputMaybe<Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Event_Sum_Order_By>;
  var_pop?: InputMaybe<Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Event_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Event_Avg_Fields = {
  __typename?: 'event_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "event" */
export type Event_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  _and?: InputMaybe<Array<Event_Bool_Exp>>;
  _not?: InputMaybe<Event_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Bool_Exp>>;
  campus?: InputMaybe<String_Comparison_Exp>;
  children?: InputMaybe<Event_Bool_Exp>;
  children_aggregate?: InputMaybe<Event_Aggregate_Bool_Exp>;
  cohorts?: InputMaybe<Label_Bool_Exp>;
  cohorts_aggregate?: InputMaybe<Label_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  endAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  groups?: InputMaybe<Group_Bool_Exp>;
  groups_aggregate?: InputMaybe<Group_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  matches?: InputMaybe<Match_Bool_Exp>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Bool_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectAvailabilities?: InputMaybe<Object_Availability_Bool_Exp>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  parent?: InputMaybe<Event_Bool_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  processedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  progresses?: InputMaybe<Progress_Bool_Exp>;
  progressesByEventid?: InputMaybe<Progress_Bool_Exp>;
  progressesByEventid_aggregate?: InputMaybe<Progress_Aggregate_Bool_Exp>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Bool_Exp>;
  registrations?: InputMaybe<Registration_Bool_Exp>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Bool_Exp>;
  results?: InputMaybe<Result_Bool_Exp>;
  results_aggregate?: InputMaybe<Result_Aggregate_Bool_Exp>;
  startAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  users?: InputMaybe<Event_User_View_Bool_Exp>;
  usersRelation?: InputMaybe<Event_User_Bool_Exp>;
  usersRelation_aggregate?: InputMaybe<Event_User_Aggregate_Bool_Exp>;
  users_aggregate?: InputMaybe<Event_User_View_Aggregate_Bool_Exp>;
  xps?: InputMaybe<Xp_View_Bool_Exp>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  __typename?: 'event_max_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  processedAt?: Maybe<Scalars['timestamptz']['output']>;
  startAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "event" */
export type Event_Max_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  processedAt?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  __typename?: 'event_min_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  processedAt?: Maybe<Scalars['timestamptz']['output']>;
  startAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "event" */
export type Event_Min_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  processedAt?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  campus?: InputMaybe<Order_By>;
  children_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
  cohorts_aggregate?: InputMaybe<Label_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  groups_aggregate?: InputMaybe<Group_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Order_By>;
  objectId?: InputMaybe<Order_By>;
  parent?: InputMaybe<Event_Order_By>;
  parentId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  processedAt?: InputMaybe<Order_By>;
  progressesByEventid_aggregate?: InputMaybe<Progress_Aggregate_Order_By>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Order_By>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Order_By>;
  results_aggregate?: InputMaybe<Result_Aggregate_Order_By>;
  startAt?: InputMaybe<Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  usersRelation_aggregate?: InputMaybe<Event_User_Aggregate_Order_By>;
  users_aggregate?: InputMaybe<Event_User_View_Aggregate_Order_By>;
  xps_aggregate?: InputMaybe<Xp_View_Aggregate_Order_By>;
};

/** select columns of table "event" */
export enum Event_Select_Column {
  /** column name */
  Campus = 'campus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Path = 'path',
  /** column name */
  ProcessedAt = 'processedAt',
  /** column name */
  StartAt = 'startAt'
}

/** aggregate stddev on columns */
export type Event_Stddev_Fields = {
  __typename?: 'event_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "event" */
export type Event_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_Stddev_Pop_Fields = {
  __typename?: 'event_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "event" */
export type Event_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_Stddev_Samp_Fields = {
  __typename?: 'event_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "event" */
export type Event_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "event" */
export type Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Stream_Cursor_Value_Input = {
  campus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  processedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  startAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Event_Sum_Fields = {
  __typename?: 'event_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "event" */
export type Event_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** columns and relationships of "event_user" */
export type Event_User = {
  __typename?: 'event_user';
  /** An array relationship */
  cohorts: Array<Label_User>;
  /** An aggregate relationship */
  cohorts_aggregate: Label_User_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Event;
  eventId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  /** An object relationship */
  member?: Maybe<Event_User_View>;
  /** An array relationship */
  objectAvailabilities: Array<Object_Availability>;
  /** An aggregate relationship */
  objectAvailabilities_aggregate: Object_Availability_Aggregate;
  /** An object relationship */
  publicUser?: Maybe<User_Public_View>;
  /** An object relationship */
  user: User;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId: Scalars['Int']['output'];
  userLogin?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  xp?: Maybe<Xp_View>;
};


/** columns and relationships of "event_user" */
export type Event_UserCohortsArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "event_user" */
export type Event_UserCohorts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "event_user" */
export type Event_UserObjectAvailabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


/** columns and relationships of "event_user" */
export type Event_UserObjectAvailabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};

/** aggregated selection of "event_user" */
export type Event_User_Aggregate = {
  __typename?: 'event_user_aggregate';
  aggregate?: Maybe<Event_User_Aggregate_Fields>;
  nodes: Array<Event_User>;
};

export type Event_User_Aggregate_Bool_Exp = {
  count?: InputMaybe<Event_User_Aggregate_Bool_Exp_Count>;
};

export type Event_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Event_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Event_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event_user" */
export type Event_User_Aggregate_Fields = {
  __typename?: 'event_user_aggregate_fields';
  avg?: Maybe<Event_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Event_User_Max_Fields>;
  min?: Maybe<Event_User_Min_Fields>;
  stddev?: Maybe<Event_User_Stddev_Fields>;
  stddev_pop?: Maybe<Event_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_User_Stddev_Samp_Fields>;
  sum?: Maybe<Event_User_Sum_Fields>;
  var_pop?: Maybe<Event_User_Var_Pop_Fields>;
  var_samp?: Maybe<Event_User_Var_Samp_Fields>;
  variance?: Maybe<Event_User_Variance_Fields>;
};


/** aggregate fields of "event_user" */
export type Event_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "event_user" */
export type Event_User_Aggregate_Order_By = {
  avg?: InputMaybe<Event_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_User_Max_Order_By>;
  min?: InputMaybe<Event_User_Min_Order_By>;
  stddev?: InputMaybe<Event_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Event_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Event_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Event_User_Sum_Order_By>;
  var_pop?: InputMaybe<Event_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Event_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Event_User_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Event_User_Avg_Fields = {
  __typename?: 'event_user_avg_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "event_user" */
export type Event_User_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event_user". All fields are combined with a logical 'AND'. */
export type Event_User_Bool_Exp = {
  _and?: InputMaybe<Array<Event_User_Bool_Exp>>;
  _not?: InputMaybe<Event_User_Bool_Exp>;
  _or?: InputMaybe<Array<Event_User_Bool_Exp>>;
  cohorts?: InputMaybe<Label_User_Bool_Exp>;
  cohorts_aggregate?: InputMaybe<Label_User_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  member?: InputMaybe<Event_User_View_Bool_Exp>;
  objectAvailabilities?: InputMaybe<Object_Availability_Bool_Exp>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Bool_Exp>;
  publicUser?: InputMaybe<User_Public_View_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userAuditRatio?: InputMaybe<Float8_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
  userName?: InputMaybe<String_Comparison_Exp>;
  xp?: InputMaybe<Xp_View_Bool_Exp>;
};

/** aggregate max on columns */
export type Event_User_Max_Fields = {
  __typename?: 'event_user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "event_user" */
export type Event_User_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_User_Min_Fields = {
  __typename?: 'event_user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
  userName?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "event_user" */
export type Event_User_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "event_user". */
export type Event_User_Order_By = {
  cohorts_aggregate?: InputMaybe<Label_User_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  member?: InputMaybe<Event_User_View_Order_By>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Order_By>;
  publicUser?: InputMaybe<User_Public_View_Order_By>;
  user?: InputMaybe<User_Order_By>;
  userAuditRatio?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
  userName?: InputMaybe<Order_By>;
  xp?: InputMaybe<Xp_View_Order_By>;
};

/** select columns of table "event_user" */
export enum Event_User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Event_User_Stddev_Fields = {
  __typename?: 'event_user_stddev_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "event_user" */
export type Event_User_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_User_Stddev_Pop_Fields = {
  __typename?: 'event_user_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "event_user" */
export type Event_User_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_User_Stddev_Samp_Fields = {
  __typename?: 'event_user_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "event_user" */
export type Event_User_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "event_user" */
export type Event_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Event_User_Sum_Fields = {
  __typename?: 'event_user_sum_fields';
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "event_user" */
export type Event_User_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Event_User_Var_Pop_Fields = {
  __typename?: 'event_user_var_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "event_user" */
export type Event_User_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_User_Var_Samp_Fields = {
  __typename?: 'event_user_var_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "event_user" */
export type Event_User_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_User_Variance_Fields = {
  __typename?: 'event_user_variance_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  level?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "event_user" */
export type Event_User_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "event_user_view" */
export type Event_User_View = {
  __typename?: 'event_user_view';
  /** An array relationship */
  cohorts: Array<Label_User>;
  /** An aggregate relationship */
  cohorts_aggregate: Label_User_Aggregate;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  discordDMChannelId?: Maybe<Scalars['String']['output']>;
  discordId?: Maybe<Scalars['String']['output']>;
  discordLogin?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  profile?: Maybe<Scalars['jsonb']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "event_user_view" */
export type Event_User_ViewCohortsArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "event_user_view" */
export type Event_User_ViewCohorts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "event_user_view" */
export type Event_User_ViewProfileArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "event_user_view" */
export type Event_User_View_Aggregate = {
  __typename?: 'event_user_view_aggregate';
  aggregate?: Maybe<Event_User_View_Aggregate_Fields>;
  nodes: Array<Event_User_View>;
};

export type Event_User_View_Aggregate_Bool_Exp = {
  count?: InputMaybe<Event_User_View_Aggregate_Bool_Exp_Count>;
};

export type Event_User_View_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Event_User_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Event_User_View_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event_user_view" */
export type Event_User_View_Aggregate_Fields = {
  __typename?: 'event_user_view_aggregate_fields';
  avg?: Maybe<Event_User_View_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Event_User_View_Max_Fields>;
  min?: Maybe<Event_User_View_Min_Fields>;
  stddev?: Maybe<Event_User_View_Stddev_Fields>;
  stddev_pop?: Maybe<Event_User_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_User_View_Stddev_Samp_Fields>;
  sum?: Maybe<Event_User_View_Sum_Fields>;
  var_pop?: Maybe<Event_User_View_Var_Pop_Fields>;
  var_samp?: Maybe<Event_User_View_Var_Samp_Fields>;
  variance?: Maybe<Event_User_View_Variance_Fields>;
};


/** aggregate fields of "event_user_view" */
export type Event_User_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_User_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "event_user_view" */
export type Event_User_View_Aggregate_Order_By = {
  avg?: InputMaybe<Event_User_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_User_View_Max_Order_By>;
  min?: InputMaybe<Event_User_View_Min_Order_By>;
  stddev?: InputMaybe<Event_User_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Event_User_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Event_User_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Event_User_View_Sum_Order_By>;
  var_pop?: InputMaybe<Event_User_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Event_User_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Event_User_View_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Event_User_View_Avg_Fields = {
  __typename?: 'event_user_view_avg_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "event_user_view" */
export type Event_User_View_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event_user_view". All fields are combined with a logical 'AND'. */
export type Event_User_View_Bool_Exp = {
  _and?: InputMaybe<Array<Event_User_View_Bool_Exp>>;
  _not?: InputMaybe<Event_User_View_Bool_Exp>;
  _or?: InputMaybe<Array<Event_User_View_Bool_Exp>>;
  cohorts?: InputMaybe<Label_User_Bool_Exp>;
  cohorts_aggregate?: InputMaybe<Label_User_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  discordDMChannelId?: InputMaybe<String_Comparison_Exp>;
  discordId?: InputMaybe<String_Comparison_Exp>;
  discordLogin?: InputMaybe<String_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  githubId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  login?: InputMaybe<String_Comparison_Exp>;
  profile?: InputMaybe<Jsonb_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Event_User_View_Max_Fields = {
  __typename?: 'event_user_view_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  discordDMChannelId?: Maybe<Scalars['String']['output']>;
  discordId?: Maybe<Scalars['String']['output']>;
  discordLogin?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "event_user_view" */
export type Event_User_View_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  discordDMChannelId?: InputMaybe<Order_By>;
  discordId?: InputMaybe<Order_By>;
  discordLogin?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_User_View_Min_Fields = {
  __typename?: 'event_user_view_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  discordDMChannelId?: Maybe<Scalars['String']['output']>;
  discordId?: Maybe<Scalars['String']['output']>;
  discordLogin?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "event_user_view" */
export type Event_User_View_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  discordDMChannelId?: InputMaybe<Order_By>;
  discordId?: InputMaybe<Order_By>;
  discordLogin?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "event_user_view". */
export type Event_User_View_Order_By = {
  cohorts_aggregate?: InputMaybe<Label_User_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  discordDMChannelId?: InputMaybe<Order_By>;
  discordId?: InputMaybe<Order_By>;
  discordLogin?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  profile?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "event_user_view" */
export enum Event_User_View_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DiscordDmChannelId = 'discordDMChannelId',
  /** column name */
  DiscordId = 'discordId',
  /** column name */
  DiscordLogin = 'discordLogin',
  /** column name */
  EventId = 'eventId',
  /** column name */
  GithubId = 'githubId',
  /** column name */
  Id = 'id',
  /** column name */
  Login = 'login',
  /** column name */
  Profile = 'profile',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Event_User_View_Stddev_Fields = {
  __typename?: 'event_user_view_stddev_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "event_user_view" */
export type Event_User_View_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_User_View_Stddev_Pop_Fields = {
  __typename?: 'event_user_view_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "event_user_view" */
export type Event_User_View_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_User_View_Stddev_Samp_Fields = {
  __typename?: 'event_user_view_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "event_user_view" */
export type Event_User_View_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "event_user_view" */
export type Event_User_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_User_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_User_View_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  discordDMChannelId?: InputMaybe<Scalars['String']['input']>;
  discordId?: InputMaybe<Scalars['String']['input']>;
  discordLogin?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  githubId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['jsonb']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Event_User_View_Sum_Fields = {
  __typename?: 'event_user_view_sum_fields';
  eventId?: Maybe<Scalars['Int']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "event_user_view" */
export type Event_User_View_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Event_User_View_Var_Pop_Fields = {
  __typename?: 'event_user_view_var_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "event_user_view" */
export type Event_User_View_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_User_View_Var_Samp_Fields = {
  __typename?: 'event_user_view_var_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "event_user_view" */
export type Event_User_View_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_User_View_Variance_Fields = {
  __typename?: 'event_user_view_variance_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "event_user_view" */
export type Event_User_View_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Event_Var_Pop_Fields = {
  __typename?: 'event_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "event" */
export type Event_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_Var_Samp_Fields = {
  __typename?: 'event_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "event" */
export type Event_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_Variance_Fields = {
  __typename?: 'event_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "event" */
export type Event_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']['input']>;
  _gt?: InputMaybe<Scalars['float8']['input']>;
  _gte?: InputMaybe<Scalars['float8']['input']>;
  _in?: InputMaybe<Array<Scalars['float8']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['float8']['input']>;
  _lte?: InputMaybe<Scalars['float8']['input']>;
  _neq?: InputMaybe<Scalars['float8']['input']>;
  _nin?: InputMaybe<Array<Scalars['float8']['input']>>;
};

/** columns and relationships of "group" */
export type Group = {
  __typename?: 'group';
  /** An array relationship */
  auditors: Array<Audit>;
  /** An aggregate relationship */
  auditors_aggregate: Audit_Aggregate;
  campus?: Maybe<Scalars['String']['output']>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  captain?: Maybe<User_Public_View>;
  captainId: Scalars['Int']['output'];
  captainLogin?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  captainRecords: Array<Record_Public_View>;
  /** An aggregate relationship */
  captainRecords_aggregate: Record_Public_View_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** An array relationship */
  members: Array<Group_User>;
  /** An aggregate relationship */
  members_aggregate: Group_User_Aggregate;
  /** An object relationship */
  object: Object;
  objectId: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  /** An array relationship */
  progresses: Array<Progress>;
  /** An aggregate relationship */
  progresses_aggregate: Progress_Aggregate;
  /** An array relationship */
  results: Array<Result>;
  /** An aggregate relationship */
  results_aggregate: Result_Aggregate;
  startedWorkingAt?: Maybe<Scalars['timestamptz']['output']>;
  status: Group_Status_Enum;
  /** An array relationship */
  tasks: Array<Task>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "group" */
export type GroupAuditorsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupAuditors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupCaptainRecordsArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupCaptainRecords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupMembersArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupMembers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupProgressesArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupProgresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupResultsArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupResults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "group" */
export type GroupTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** aggregated selection of "group" */
export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

export type Group_Aggregate_Bool_Exp = {
  count?: InputMaybe<Group_Aggregate_Bool_Exp_Count>;
};

export type Group_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Group_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "group" */
export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  avg?: Maybe<Group_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
  stddev?: Maybe<Group_Stddev_Fields>;
  stddev_pop?: Maybe<Group_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_Stddev_Samp_Fields>;
  sum?: Maybe<Group_Sum_Fields>;
  var_pop?: Maybe<Group_Var_Pop_Fields>;
  var_samp?: Maybe<Group_Var_Samp_Fields>;
  variance?: Maybe<Group_Variance_Fields>;
};


/** aggregate fields of "group" */
export type Group_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "group" */
export type Group_Aggregate_Order_By = {
  avg?: InputMaybe<Group_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_Max_Order_By>;
  min?: InputMaybe<Group_Min_Order_By>;
  stddev?: InputMaybe<Group_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Group_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Group_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Group_Sum_Order_By>;
  var_pop?: InputMaybe<Group_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Group_Var_Samp_Order_By>;
  variance?: InputMaybe<Group_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Group_Avg_Fields = {
  __typename?: 'group_avg_fields';
  captainId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "group" */
export type Group_Avg_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'. */
export type Group_Bool_Exp = {
  _and?: InputMaybe<Array<Group_Bool_Exp>>;
  _not?: InputMaybe<Group_Bool_Exp>;
  _or?: InputMaybe<Array<Group_Bool_Exp>>;
  auditors?: InputMaybe<Audit_Bool_Exp>;
  auditors_aggregate?: InputMaybe<Audit_Aggregate_Bool_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  cancelReason?: InputMaybe<String_Comparison_Exp>;
  canceledAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  captain?: InputMaybe<User_Public_View_Bool_Exp>;
  captainId?: InputMaybe<Int_Comparison_Exp>;
  captainLogin?: InputMaybe<String_Comparison_Exp>;
  captainRecords?: InputMaybe<Record_Public_View_Bool_Exp>;
  captainRecords_aggregate?: InputMaybe<Record_Public_View_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  members?: InputMaybe<Group_User_Bool_Exp>;
  members_aggregate?: InputMaybe<Group_User_Aggregate_Bool_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  progresses?: InputMaybe<Progress_Bool_Exp>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Bool_Exp>;
  results?: InputMaybe<Result_Bool_Exp>;
  results_aggregate?: InputMaybe<Result_Aggregate_Bool_Exp>;
  startedWorkingAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<Group_Status_Enum_Comparison_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "group" */
export enum Group_Constraint {
  /** unique or primary key constraint on columns "captainId", "eventId", "objectId" */
  GroupEventIdObjectIdCaptainIdKey = 'group_eventId_objectId_captainId_key',
  /** unique or primary key constraint on columns "id" */
  GroupPkey = 'group_pkey'
}

/** input type for inserting data into table "group" */
export type Group_Insert_Input = {
  eventId?: InputMaybe<Scalars['Int']['input']>;
  members?: InputMaybe<Group_User_Arr_Rel_Insert_Input>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  results?: InputMaybe<Result_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  campus?: Maybe<Scalars['String']['output']>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['timestamptz']['output']>;
  captainId?: Maybe<Scalars['Int']['output']>;
  captainLogin?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  startedWorkingAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "group" */
export type Group_Max_Order_By = {
  campus?: InputMaybe<Order_By>;
  cancelReason?: InputMaybe<Order_By>;
  canceledAt?: InputMaybe<Order_By>;
  captainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  startedWorkingAt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  campus?: Maybe<Scalars['String']['output']>;
  cancelReason?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['timestamptz']['output']>;
  captainId?: Maybe<Scalars['Int']['output']>;
  captainLogin?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  startedWorkingAt?: Maybe<Scalars['timestamptz']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "group" */
export type Group_Min_Order_By = {
  campus?: InputMaybe<Order_By>;
  cancelReason?: InputMaybe<Order_By>;
  canceledAt?: InputMaybe<Order_By>;
  captainId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  startedWorkingAt?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "group" */
export type Group_Mutation_Response = {
  __typename?: 'group_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Group>;
};

/** input type for inserting object relation for remote table "group" */
export type Group_Obj_Rel_Insert_Input = {
  data: Group_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_On_Conflict>;
};

/** on_conflict condition type for table "group" */
export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns?: Array<Group_Update_Column>;
  where?: InputMaybe<Group_Bool_Exp>;
};

/** Ordering options when selecting data from "group". */
export type Group_Order_By = {
  auditors_aggregate?: InputMaybe<Audit_Aggregate_Order_By>;
  campus?: InputMaybe<Order_By>;
  cancelReason?: InputMaybe<Order_By>;
  canceledAt?: InputMaybe<Order_By>;
  captain?: InputMaybe<User_Public_View_Order_By>;
  captainId?: InputMaybe<Order_By>;
  captainLogin?: InputMaybe<Order_By>;
  captainRecords_aggregate?: InputMaybe<Record_Public_View_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  members_aggregate?: InputMaybe<Group_User_Aggregate_Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Order_By>;
  results_aggregate?: InputMaybe<Result_Aggregate_Order_By>;
  startedWorkingAt?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: group */
export type Group_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "group" */
export enum Group_Select_Column {
  /** column name */
  Campus = 'campus',
  /** column name */
  CancelReason = 'cancelReason',
  /** column name */
  CanceledAt = 'canceledAt',
  /** column name */
  CaptainId = 'captainId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  Path = 'path',
  /** column name */
  StartedWorkingAt = 'startedWorkingAt',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "group" */
export type Group_Set_Input = {
  status?: InputMaybe<Group_Status_Enum>;
};

export enum Group_Status_Enum {
  Audit = 'audit',
  Finished = 'finished',
  Setup = 'setup',
  Working = 'working'
}

/** Boolean expression to compare columns of type "group_status_enum". All fields are combined with logical 'AND'. */
export type Group_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Group_Status_Enum>;
  _in?: InputMaybe<Array<Group_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Group_Status_Enum>;
  _nin?: InputMaybe<Array<Group_Status_Enum>>;
};

/** aggregate stddev on columns */
export type Group_Stddev_Fields = {
  __typename?: 'group_stddev_fields';
  captainId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "group" */
export type Group_Stddev_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_Stddev_Pop_Fields = {
  __typename?: 'group_stddev_pop_fields';
  captainId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "group" */
export type Group_Stddev_Pop_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_Stddev_Samp_Fields = {
  __typename?: 'group_stddev_samp_fields';
  captainId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "group" */
export type Group_Stddev_Samp_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "group" */
export type Group_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Group_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Group_Stream_Cursor_Value_Input = {
  campus?: InputMaybe<Scalars['String']['input']>;
  cancelReason?: InputMaybe<Scalars['String']['input']>;
  canceledAt?: InputMaybe<Scalars['timestamptz']['input']>;
  captainId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  startedWorkingAt?: InputMaybe<Scalars['timestamptz']['input']>;
  status?: InputMaybe<Group_Status_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Group_Sum_Fields = {
  __typename?: 'group_sum_fields';
  captainId?: Maybe<Scalars['Int']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "group" */
export type Group_Sum_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** update columns of table "group" */
export enum Group_Update_Column {
  /** column name */
  Status = 'status'
}

export type Group_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_Set_Input>;
  /** filter the rows which have to be updated */
  where: Group_Bool_Exp;
};

/** columns and relationships of "group_user" */
export type Group_User = {
  __typename?: 'group_user';
  accepted?: Maybe<Scalars['Boolean']['output']>;
  answeredAt?: Maybe<Scalars['timestamptz']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  enrollerId?: Maybe<Scalars['Int']['output']>;
  enrollment: Scalars['String']['output'];
  /** An object relationship */
  event: Event;
  eventId: Scalars['Int']['output'];
  /** An object relationship */
  group: Group;
  groupId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User_Public_View>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId: Scalars['Int']['output'];
  userLevel?: Maybe<Scalars['String']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "group_user" */
export type Group_User_Aggregate = {
  __typename?: 'group_user_aggregate';
  aggregate?: Maybe<Group_User_Aggregate_Fields>;
  nodes: Array<Group_User>;
};

export type Group_User_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Group_User_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Group_User_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Group_User_Aggregate_Bool_Exp_Count>;
};

export type Group_User_Aggregate_Bool_Exp_Bool_And = {
  arguments: Group_User_Select_Column_Group_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Group_User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Group_User_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Group_User_Select_Column_Group_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Group_User_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Group_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Group_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Group_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "group_user" */
export type Group_User_Aggregate_Fields = {
  __typename?: 'group_user_aggregate_fields';
  avg?: Maybe<Group_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Group_User_Max_Fields>;
  min?: Maybe<Group_User_Min_Fields>;
  stddev?: Maybe<Group_User_Stddev_Fields>;
  stddev_pop?: Maybe<Group_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Group_User_Stddev_Samp_Fields>;
  sum?: Maybe<Group_User_Sum_Fields>;
  var_pop?: Maybe<Group_User_Var_Pop_Fields>;
  var_samp?: Maybe<Group_User_Var_Samp_Fields>;
  variance?: Maybe<Group_User_Variance_Fields>;
};


/** aggregate fields of "group_user" */
export type Group_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Group_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "group_user" */
export type Group_User_Aggregate_Order_By = {
  avg?: InputMaybe<Group_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Group_User_Max_Order_By>;
  min?: InputMaybe<Group_User_Min_Order_By>;
  stddev?: InputMaybe<Group_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Group_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Group_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Group_User_Sum_Order_By>;
  var_pop?: InputMaybe<Group_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Group_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Group_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "group_user" */
export type Group_User_Arr_Rel_Insert_Input = {
  data: Array<Group_User_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Group_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Group_User_Avg_Fields = {
  __typename?: 'group_user_avg_fields';
  enrollerId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "group_user" */
export type Group_User_Avg_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "group_user". All fields are combined with a logical 'AND'. */
export type Group_User_Bool_Exp = {
  _and?: InputMaybe<Array<Group_User_Bool_Exp>>;
  _not?: InputMaybe<Group_User_Bool_Exp>;
  _or?: InputMaybe<Array<Group_User_Bool_Exp>>;
  accepted?: InputMaybe<Boolean_Comparison_Exp>;
  answeredAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  enrollerId?: InputMaybe<Int_Comparison_Exp>;
  enrollment?: InputMaybe<String_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  group?: InputMaybe<Group_Bool_Exp>;
  groupId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Public_View_Bool_Exp>;
  userAuditRatio?: InputMaybe<Float8_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLevel?: InputMaybe<String_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "group_user" */
export enum Group_User_Constraint {
  /** unique or primary key constraint on columns "enrollment", "userId", "groupId" */
  GroupUserGroupIdUserIdEnrollmentKey = 'group_user_groupId_userId_enrollment_key',
  /** unique or primary key constraint on columns "id" */
  GroupUserPkey = 'group_user_pkey'
}

/** input type for inserting data into table "group_user" */
export type Group_User_Insert_Input = {
  enrollerId?: InputMaybe<Scalars['Int']['input']>;
  enrollment?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Group_Obj_Rel_Insert_Input>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Group_User_Max_Fields = {
  __typename?: 'group_user_max_fields';
  answeredAt?: Maybe<Scalars['timestamptz']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  enrollerId?: Maybe<Scalars['Int']['output']>;
  enrollment?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLevel?: Maybe<Scalars['String']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "group_user" */
export type Group_User_Max_Order_By = {
  answeredAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  enrollerId?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Group_User_Min_Fields = {
  __typename?: 'group_user_min_fields';
  answeredAt?: Maybe<Scalars['timestamptz']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  enrollerId?: Maybe<Scalars['Int']['output']>;
  enrollment?: Maybe<Scalars['String']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLevel?: Maybe<Scalars['String']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "group_user" */
export type Group_User_Min_Order_By = {
  answeredAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  enrollerId?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "group_user" */
export type Group_User_Mutation_Response = {
  __typename?: 'group_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Group_User>;
};

/** on_conflict condition type for table "group_user" */
export type Group_User_On_Conflict = {
  constraint: Group_User_Constraint;
  update_columns?: Array<Group_User_Update_Column>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};

/** Ordering options when selecting data from "group_user". */
export type Group_User_Order_By = {
  accepted?: InputMaybe<Order_By>;
  answeredAt?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  enrollerId?: InputMaybe<Order_By>;
  enrollment?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  group?: InputMaybe<Group_Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Public_View_Order_By>;
  userAuditRatio?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userLevel?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
};

/** primary key columns input for table: group_user */
export type Group_User_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "group_user" */
export enum Group_User_Select_Column {
  /** column name */
  Accepted = 'accepted',
  /** column name */
  AnsweredAt = 'answeredAt',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EnrollerId = 'enrollerId',
  /** column name */
  Enrollment = 'enrollment',
  /** column name */
  EventId = 'eventId',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** select "group_user_aggregate_bool_exp_bool_and_arguments_columns" columns of table "group_user" */
export enum Group_User_Select_Column_Group_User_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Accepted = 'accepted'
}

/** select "group_user_aggregate_bool_exp_bool_or_arguments_columns" columns of table "group_user" */
export enum Group_User_Select_Column_Group_User_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Accepted = 'accepted'
}

/** input type for updating data in table "group_user" */
export type Group_User_Set_Input = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  answeredAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Group_User_Stddev_Fields = {
  __typename?: 'group_user_stddev_fields';
  enrollerId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "group_user" */
export type Group_User_Stddev_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Group_User_Stddev_Pop_Fields = {
  __typename?: 'group_user_stddev_pop_fields';
  enrollerId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "group_user" */
export type Group_User_Stddev_Pop_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Group_User_Stddev_Samp_Fields = {
  __typename?: 'group_user_stddev_samp_fields';
  enrollerId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "group_user" */
export type Group_User_Stddev_Samp_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "group_user" */
export type Group_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Group_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Group_User_Stream_Cursor_Value_Input = {
  accepted?: InputMaybe<Scalars['Boolean']['input']>;
  answeredAt?: InputMaybe<Scalars['timestamptz']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  enrollerId?: InputMaybe<Scalars['Int']['input']>;
  enrollment?: InputMaybe<Scalars['String']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Group_User_Sum_Fields = {
  __typename?: 'group_user_sum_fields';
  enrollerId?: Maybe<Scalars['Int']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "group_user" */
export type Group_User_Sum_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "group_user" */
export enum Group_User_Update_Column {
  /** column name */
  Accepted = 'accepted',
  /** column name */
  AnsweredAt = 'answeredAt'
}

export type Group_User_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Group_User_Set_Input>;
  /** filter the rows which have to be updated */
  where: Group_User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Group_User_Var_Pop_Fields = {
  __typename?: 'group_user_var_pop_fields';
  enrollerId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "group_user" */
export type Group_User_Var_Pop_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_User_Var_Samp_Fields = {
  __typename?: 'group_user_var_samp_fields';
  enrollerId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "group_user" */
export type Group_User_Var_Samp_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_User_Variance_Fields = {
  __typename?: 'group_user_variance_fields';
  enrollerId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "group_user" */
export type Group_User_Variance_Order_By = {
  enrollerId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Group_Var_Pop_Fields = {
  __typename?: 'group_var_pop_fields';
  captainId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "group" */
export type Group_Var_Pop_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Group_Var_Samp_Fields = {
  __typename?: 'group_var_samp_fields';
  captainId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "group" */
export type Group_Var_Samp_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Group_Variance_Fields = {
  __typename?: 'group_variance_fields';
  captainId?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "group" */
export type Group_Variance_Order_By = {
  captainId?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "label" */
export type Label = {
  __typename?: 'label';
  createdAt: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  registrations: Array<Registration>;
  /** An aggregate relationship */
  registrations_aggregate: Registration_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  users: Array<Label_User>;
  /** An aggregate relationship */
  users_aggregate: Label_User_Aggregate;
};


/** columns and relationships of "label" */
export type LabelRegistrationsArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "label" */
export type LabelRegistrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "label" */
export type LabelUsersArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "label" */
export type LabelUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};

/** aggregated selection of "label" */
export type Label_Aggregate = {
  __typename?: 'label_aggregate';
  aggregate?: Maybe<Label_Aggregate_Fields>;
  nodes: Array<Label>;
};

export type Label_Aggregate_Bool_Exp = {
  count?: InputMaybe<Label_Aggregate_Bool_Exp_Count>;
};

export type Label_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Label_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Label_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "label" */
export type Label_Aggregate_Fields = {
  __typename?: 'label_aggregate_fields';
  avg?: Maybe<Label_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Label_Max_Fields>;
  min?: Maybe<Label_Min_Fields>;
  stddev?: Maybe<Label_Stddev_Fields>;
  stddev_pop?: Maybe<Label_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Label_Stddev_Samp_Fields>;
  sum?: Maybe<Label_Sum_Fields>;
  var_pop?: Maybe<Label_Var_Pop_Fields>;
  var_samp?: Maybe<Label_Var_Samp_Fields>;
  variance?: Maybe<Label_Variance_Fields>;
};


/** aggregate fields of "label" */
export type Label_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Label_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "label" */
export type Label_Aggregate_Order_By = {
  avg?: InputMaybe<Label_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Label_Max_Order_By>;
  min?: InputMaybe<Label_Min_Order_By>;
  stddev?: InputMaybe<Label_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Label_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Label_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Label_Sum_Order_By>;
  var_pop?: InputMaybe<Label_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Label_Var_Samp_Order_By>;
  variance?: InputMaybe<Label_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Label_Avg_Fields = {
  __typename?: 'label_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "label" */
export type Label_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "label". All fields are combined with a logical 'AND'. */
export type Label_Bool_Exp = {
  _and?: InputMaybe<Array<Label_Bool_Exp>>;
  _not?: InputMaybe<Label_Bool_Exp>;
  _or?: InputMaybe<Array<Label_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  registrations?: InputMaybe<Registration_Bool_Exp>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Label_User_Bool_Exp>;
  users_aggregate?: InputMaybe<Label_User_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Label_Max_Fields = {
  __typename?: 'label_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "label" */
export type Label_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Label_Min_Fields = {
  __typename?: 'label_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "label" */
export type Label_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "label". */
export type Label_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Label_User_Aggregate_Order_By>;
};

/** select columns of table "label" */
export enum Label_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Label_Stddev_Fields = {
  __typename?: 'label_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "label" */
export type Label_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Label_Stddev_Pop_Fields = {
  __typename?: 'label_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "label" */
export type Label_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Label_Stddev_Samp_Fields = {
  __typename?: 'label_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "label" */
export type Label_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "label" */
export type Label_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Label_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Label_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Label_Sum_Fields = {
  __typename?: 'label_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "label" */
export type Label_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "label_user" */
export type Label_User = {
  __typename?: 'label_user';
  createdAt: Scalars['timestamptz']['output'];
  eventId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  label: Label;
  labelId: Scalars['Int']['output'];
  /** A computed field, executes function "get_label_user_label_name" */
  labelName?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  user: User;
  userId: Scalars['Int']['output'];
};

/** aggregated selection of "label_user" */
export type Label_User_Aggregate = {
  __typename?: 'label_user_aggregate';
  aggregate?: Maybe<Label_User_Aggregate_Fields>;
  nodes: Array<Label_User>;
};

export type Label_User_Aggregate_Bool_Exp = {
  count?: InputMaybe<Label_User_Aggregate_Bool_Exp_Count>;
};

export type Label_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Label_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Label_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "label_user" */
export type Label_User_Aggregate_Fields = {
  __typename?: 'label_user_aggregate_fields';
  avg?: Maybe<Label_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Label_User_Max_Fields>;
  min?: Maybe<Label_User_Min_Fields>;
  stddev?: Maybe<Label_User_Stddev_Fields>;
  stddev_pop?: Maybe<Label_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Label_User_Stddev_Samp_Fields>;
  sum?: Maybe<Label_User_Sum_Fields>;
  var_pop?: Maybe<Label_User_Var_Pop_Fields>;
  var_samp?: Maybe<Label_User_Var_Samp_Fields>;
  variance?: Maybe<Label_User_Variance_Fields>;
};


/** aggregate fields of "label_user" */
export type Label_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Label_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "label_user" */
export type Label_User_Aggregate_Order_By = {
  avg?: InputMaybe<Label_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Label_User_Max_Order_By>;
  min?: InputMaybe<Label_User_Min_Order_By>;
  stddev?: InputMaybe<Label_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Label_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Label_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Label_User_Sum_Order_By>;
  var_pop?: InputMaybe<Label_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Label_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Label_User_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Label_User_Avg_Fields = {
  __typename?: 'label_user_avg_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "label_user" */
export type Label_User_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "label_user". All fields are combined with a logical 'AND'. */
export type Label_User_Bool_Exp = {
  _and?: InputMaybe<Array<Label_User_Bool_Exp>>;
  _not?: InputMaybe<Label_User_Bool_Exp>;
  _or?: InputMaybe<Array<Label_User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<Label_Bool_Exp>;
  labelId?: InputMaybe<Int_Comparison_Exp>;
  labelName?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Label_User_Max_Fields = {
  __typename?: 'label_user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  labelId?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "get_label_user_label_name" */
  labelName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "label_user" */
export type Label_User_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Label_User_Min_Fields = {
  __typename?: 'label_user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  labelId?: Maybe<Scalars['Int']['output']>;
  /** A computed field, executes function "get_label_user_label_name" */
  labelName?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "label_user" */
export type Label_User_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "label_user". */
export type Label_User_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Label_Order_By>;
  labelId?: InputMaybe<Order_By>;
  labelName?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "label_user" */
export enum Label_User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Label_User_Stddev_Fields = {
  __typename?: 'label_user_stddev_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "label_user" */
export type Label_User_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Label_User_Stddev_Pop_Fields = {
  __typename?: 'label_user_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "label_user" */
export type Label_User_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Label_User_Stddev_Samp_Fields = {
  __typename?: 'label_user_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "label_user" */
export type Label_User_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "label_user" */
export type Label_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Label_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Label_User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  labelId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Label_User_Sum_Fields = {
  __typename?: 'label_user_sum_fields';
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  labelId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "label_user" */
export type Label_User_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Label_User_Var_Pop_Fields = {
  __typename?: 'label_user_var_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "label_user" */
export type Label_User_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Label_User_Var_Samp_Fields = {
  __typename?: 'label_user_var_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "label_user" */
export type Label_User_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Label_User_Variance_Fields = {
  __typename?: 'label_user_variance_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "label_user" */
export type Label_User_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Label_Var_Pop_Fields = {
  __typename?: 'label_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "label" */
export type Label_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Label_Var_Samp_Fields = {
  __typename?: 'label_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "label" */
export type Label_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Label_Variance_Fields = {
  __typename?: 'label_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "label" */
export type Label_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "markdown" */
export type Markdown = {
  __typename?: 'markdown';
  content: Scalars['String']['output'];
  createdAt: Scalars['timestamptz']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: User;
};

/** order by aggregate values of table "markdown" */
export type Markdown_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Markdown_Max_Order_By>;
  min?: InputMaybe<Markdown_Min_Order_By>;
};

/** Boolean expression to filter rows from the table "markdown". All fields are combined with a logical 'AND'. */
export type Markdown_Bool_Exp = {
  _and?: InputMaybe<Array<Markdown_Bool_Exp>>;
  _not?: InputMaybe<Markdown_Bool_Exp>;
  _or?: InputMaybe<Array<Markdown_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
};

/** order by max() on columns of table "markdown" */
export type Markdown_Max_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "markdown" */
export type Markdown_Min_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "markdown". */
export type Markdown_Order_By = {
  content?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
};

/** select columns of table "markdown" */
export enum Markdown_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** Streaming cursor of the table "markdown" */
export type Markdown_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Markdown_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Markdown_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** columns and relationships of "match" */
export type Match = {
  __typename?: 'match';
  bet?: Maybe<Scalars['Boolean']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  /** An object relationship */
  match?: Maybe<Match>;
  matchId?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  matches: Array<Match>;
  /** An aggregate relationship */
  matches_aggregate: Match_Aggregate;
  /** An object relationship */
  object: Object;
  objectId: Scalars['Int']['output'];
  path?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  pathByPath?: Maybe<Path>;
  result?: Maybe<Scalars['Boolean']['output']>;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User_Public_View>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "match" */
export type MatchMatchesArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "match" */
export type MatchMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};

/** aggregated selection of "match" */
export type Match_Aggregate = {
  __typename?: 'match_aggregate';
  aggregate?: Maybe<Match_Aggregate_Fields>;
  nodes: Array<Match>;
};

export type Match_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Match_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Match_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Match_Aggregate_Bool_Exp_Count>;
};

export type Match_Aggregate_Bool_Exp_Bool_And = {
  arguments: Match_Select_Column_Match_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Match_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Match_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Match_Select_Column_Match_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Match_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Match_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Match_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Match_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "match" */
export type Match_Aggregate_Fields = {
  __typename?: 'match_aggregate_fields';
  avg?: Maybe<Match_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Match_Max_Fields>;
  min?: Maybe<Match_Min_Fields>;
  stddev?: Maybe<Match_Stddev_Fields>;
  stddev_pop?: Maybe<Match_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Match_Stddev_Samp_Fields>;
  sum?: Maybe<Match_Sum_Fields>;
  var_pop?: Maybe<Match_Var_Pop_Fields>;
  var_samp?: Maybe<Match_Var_Samp_Fields>;
  variance?: Maybe<Match_Variance_Fields>;
};


/** aggregate fields of "match" */
export type Match_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Match_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "match" */
export type Match_Aggregate_Order_By = {
  avg?: InputMaybe<Match_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Match_Max_Order_By>;
  min?: InputMaybe<Match_Min_Order_By>;
  stddev?: InputMaybe<Match_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Match_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Match_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Match_Sum_Order_By>;
  var_pop?: InputMaybe<Match_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Match_Var_Samp_Order_By>;
  variance?: InputMaybe<Match_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "match" */
export type Match_Arr_Rel_Insert_Input = {
  data: Array<Match_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Match_On_Conflict>;
};

/** aggregate avg on columns */
export type Match_Avg_Fields = {
  __typename?: 'match_avg_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  matchId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "match" */
export type Match_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "match". All fields are combined with a logical 'AND'. */
export type Match_Bool_Exp = {
  _and?: InputMaybe<Array<Match_Bool_Exp>>;
  _not?: InputMaybe<Match_Bool_Exp>;
  _or?: InputMaybe<Array<Match_Bool_Exp>>;
  bet?: InputMaybe<Boolean_Comparison_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  confirmed?: InputMaybe<Boolean_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  match?: InputMaybe<Match_Bool_Exp>;
  matchId?: InputMaybe<Int_Comparison_Exp>;
  matches?: InputMaybe<Match_Bool_Exp>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Bool_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  result?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Public_View_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "match" */
export enum Match_Constraint {
  /** unique or primary key constraint on columns "id" */
  MatchPkey = 'match_pkey',
  /** unique or primary key constraint on columns "userId", "eventId", "path" */
  MatchUserIdPathEventIdKey = 'match_userId_path_eventId_key'
}

/** input type for inserting data into table "match" */
export type Match_Insert_Input = {
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  match?: InputMaybe<Match_Obj_Rel_Insert_Input>;
  matches?: InputMaybe<Match_Arr_Rel_Insert_Input>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Match_Max_Fields = {
  __typename?: 'match_max_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  matchId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "match" */
export type Match_Max_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Match_Min_Fields = {
  __typename?: 'match_min_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  matchId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "match" */
export type Match_Min_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "match" */
export type Match_Mutation_Response = {
  __typename?: 'match_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Match>;
};

/** input type for inserting object relation for remote table "match" */
export type Match_Obj_Rel_Insert_Input = {
  data: Match_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Match_On_Conflict>;
};

/** on_conflict condition type for table "match" */
export type Match_On_Conflict = {
  constraint: Match_Constraint;
  update_columns?: Array<Match_Update_Column>;
  where?: InputMaybe<Match_Bool_Exp>;
};

/** Ordering options when selecting data from "match". */
export type Match_Order_By = {
  bet?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  confirmed?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  match?: InputMaybe<Match_Order_By>;
  matchId?: InputMaybe<Order_By>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  result?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Public_View_Order_By>;
  userId?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
};

/** primary key columns input for table: match */
export type Match_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "match" */
export enum Match_Select_Column {
  /** column name */
  Bet = 'bet',
  /** column name */
  Campus = 'campus',
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  MatchId = 'matchId',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  Path = 'path',
  /** column name */
  Result = 'result',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** select "match_aggregate_bool_exp_bool_and_arguments_columns" columns of table "match" */
export enum Match_Select_Column_Match_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Bet = 'bet',
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  Result = 'result'
}

/** select "match_aggregate_bool_exp_bool_or_arguments_columns" columns of table "match" */
export enum Match_Select_Column_Match_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Bet = 'bet',
  /** column name */
  Confirmed = 'confirmed',
  /** column name */
  Result = 'result'
}

/** input type for updating data in table "match" */
export type Match_Set_Input = {
  bet?: InputMaybe<Scalars['Boolean']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate stddev on columns */
export type Match_Stddev_Fields = {
  __typename?: 'match_stddev_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  matchId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "match" */
export type Match_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Match_Stddev_Pop_Fields = {
  __typename?: 'match_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  matchId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "match" */
export type Match_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Match_Stddev_Samp_Fields = {
  __typename?: 'match_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  matchId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "match" */
export type Match_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "match" */
export type Match_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Match_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Match_Stream_Cursor_Value_Input = {
  bet?: InputMaybe<Scalars['Boolean']['input']>;
  campus?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  matchId?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  result?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Match_Sum_Fields = {
  __typename?: 'match_sum_fields';
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  matchId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "match" */
export type Match_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "match" */
export enum Match_Update_Column {
  /** column name */
  Bet = 'bet',
  /** column name */
  Confirmed = 'confirmed'
}

export type Match_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Match_Set_Input>;
  /** filter the rows which have to be updated */
  where: Match_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Match_Var_Pop_Fields = {
  __typename?: 'match_var_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  matchId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "match" */
export type Match_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Match_Var_Samp_Fields = {
  __typename?: 'match_var_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  matchId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "match" */
export type Match_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Match_Variance_Fields = {
  __typename?: 'match_variance_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  matchId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "match" */
export type Match_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  matchId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "group" */
  delete_group?: Maybe<Group_Mutation_Response>;
  /** delete single row from the table: "group" */
  delete_group_by_pk?: Maybe<Group>;
  /** delete data from the table: "group_user" */
  delete_group_user?: Maybe<Group_User_Mutation_Response>;
  /** delete single row from the table: "group_user" */
  delete_group_user_by_pk?: Maybe<Group_User>;
  /** delete data from the table: "match" */
  delete_match?: Maybe<Match_Mutation_Response>;
  /** delete single row from the table: "match" */
  delete_match_by_pk?: Maybe<Match>;
  /** delete data from the table: "registration_user" */
  delete_registration_user?: Maybe<Registration_User_Mutation_Response>;
  /** delete single row from the table: "registration_user" */
  delete_registration_user_by_pk?: Maybe<Registration_User>;
  /** delete data from the table: "toad.session_game_results" */
  delete_toad_session_game_results?: Maybe<Toad_Session_Game_Results_Mutation_Response>;
  /** delete single row from the table: "toad.session_game_results" */
  delete_toad_session_game_results_by_pk?: Maybe<Toad_Session_Game_Results>;
  /** insert data into the table: "group" */
  insert_group?: Maybe<Group_Mutation_Response>;
  /** insert a single row into the table: "group" */
  insert_group_one?: Maybe<Group>;
  /** insert data into the table: "group_user" */
  insert_group_user?: Maybe<Group_User_Mutation_Response>;
  /** insert a single row into the table: "group_user" */
  insert_group_user_one?: Maybe<Group_User>;
  /** insert data into the table: "match" */
  insert_match?: Maybe<Match_Mutation_Response>;
  /** insert a single row into the table: "match" */
  insert_match_one?: Maybe<Match>;
  /** insert data into the table: "registration_user" */
  insert_registration_user?: Maybe<Registration_User_Mutation_Response>;
  /** insert a single row into the table: "registration_user" */
  insert_registration_user_one?: Maybe<Registration_User>;
  /** insert data into the table: "result" */
  insert_result?: Maybe<Result_Mutation_Response>;
  /** insert a single row into the table: "result" */
  insert_result_one?: Maybe<Result>;
  /** insert data into the table: "toad.session_game_results" */
  insert_toad_session_game_results?: Maybe<Toad_Session_Game_Results_Mutation_Response>;
  /** insert a single row into the table: "toad.session_game_results" */
  insert_toad_session_game_results_one?: Maybe<Toad_Session_Game_Results>;
  /** insert data into the table: "toad.session_games" */
  insert_toad_session_games?: Maybe<Toad_Session_Games_Mutation_Response>;
  /** insert a single row into the table: "toad.session_games" */
  insert_toad_session_games_one?: Maybe<Toad_Session_Games>;
  /** insert data into the table: "toad.sessions" */
  insert_toad_sessions?: Maybe<Toad_Sessions_Mutation_Response>;
  /** insert a single row into the table: "toad.sessions" */
  insert_toad_sessions_one?: Maybe<Toad_Sessions>;
  /** insert data into the table: "toad.sessions_to_send" */
  insert_toad_sessions_to_send?: Maybe<Toad_Sessions_To_Send_Mutation_Response>;
  /** update data of the table: "group" */
  update_group?: Maybe<Group_Mutation_Response>;
  /** update single row of the table: "group" */
  update_group_by_pk?: Maybe<Group>;
  /** update multiples rows of table: "group" */
  update_group_many?: Maybe<Array<Maybe<Group_Mutation_Response>>>;
  /** update data of the table: "group_user" */
  update_group_user?: Maybe<Group_User_Mutation_Response>;
  /** update single row of the table: "group_user" */
  update_group_user_by_pk?: Maybe<Group_User>;
  /** update multiples rows of table: "group_user" */
  update_group_user_many?: Maybe<Array<Maybe<Group_User_Mutation_Response>>>;
  /** update data of the table: "match" */
  update_match?: Maybe<Match_Mutation_Response>;
  /** update single row of the table: "match" */
  update_match_by_pk?: Maybe<Match>;
  /** update multiples rows of table: "match" */
  update_match_many?: Maybe<Array<Maybe<Match_Mutation_Response>>>;
  /** update data of the table: "result" */
  update_result?: Maybe<Result_Mutation_Response>;
  /** update single row of the table: "result" */
  update_result_by_pk?: Maybe<Result>;
  /** update multiples rows of table: "result" */
  update_result_many?: Maybe<Array<Maybe<Result_Mutation_Response>>>;
  /** update data of the table: "toad.session_game_results" */
  update_toad_session_game_results?: Maybe<Toad_Session_Game_Results_Mutation_Response>;
  /** update single row of the table: "toad.session_game_results" */
  update_toad_session_game_results_by_pk?: Maybe<Toad_Session_Game_Results>;
  /** update multiples rows of table: "toad.session_game_results" */
  update_toad_session_game_results_many?: Maybe<Array<Maybe<Toad_Session_Game_Results_Mutation_Response>>>;
  /** update data of the table: "toad.session_games" */
  update_toad_session_games?: Maybe<Toad_Session_Games_Mutation_Response>;
  /** update single row of the table: "toad.session_games" */
  update_toad_session_games_by_pk?: Maybe<Toad_Session_Games>;
  /** update multiples rows of table: "toad.session_games" */
  update_toad_session_games_many?: Maybe<Array<Maybe<Toad_Session_Games_Mutation_Response>>>;
  /** update data of the table: "toad.sessions" */
  update_toad_sessions?: Maybe<Toad_Sessions_Mutation_Response>;
  /** update single row of the table: "toad.sessions" */
  update_toad_sessions_by_pk?: Maybe<Toad_Sessions>;
  /** update multiples rows of table: "toad.sessions" */
  update_toad_sessions_many?: Maybe<Array<Maybe<Toad_Sessions_Mutation_Response>>>;
  /** update data of the table: "toad.sessions_to_send" */
  update_toad_sessions_to_send?: Maybe<Toad_Sessions_To_Send_Mutation_Response>;
  /** update multiples rows of table: "toad.sessions_to_send" */
  update_toad_sessions_to_send_many?: Maybe<Array<Maybe<Toad_Sessions_To_Send_Mutation_Response>>>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update multiples rows of table: "user" */
  update_user_many?: Maybe<Array<Maybe<User_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Group_UserArgs = {
  where: Group_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Group_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_MatchArgs = {
  where: Match_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Match_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Registration_UserArgs = {
  where: Registration_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Registration_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Toad_Session_Game_ResultsArgs = {
  where: Toad_Session_Game_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Toad_Session_Game_Results_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: InputMaybe<Group_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_UserArgs = {
  objects: Array<Group_User_Insert_Input>;
  on_conflict?: InputMaybe<Group_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Group_User_OneArgs = {
  object: Group_User_Insert_Input;
  on_conflict?: InputMaybe<Group_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MatchArgs = {
  objects: Array<Match_Insert_Input>;
  on_conflict?: InputMaybe<Match_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Match_OneArgs = {
  object: Match_Insert_Input;
  on_conflict?: InputMaybe<Match_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Registration_UserArgs = {
  objects: Array<Registration_User_Insert_Input>;
  on_conflict?: InputMaybe<Registration_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Registration_User_OneArgs = {
  object: Registration_User_Insert_Input;
  on_conflict?: InputMaybe<Registration_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ResultArgs = {
  objects: Array<Result_Insert_Input>;
  on_conflict?: InputMaybe<Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Result_OneArgs = {
  object: Result_Insert_Input;
  on_conflict?: InputMaybe<Result_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toad_Session_Game_ResultsArgs = {
  objects: Array<Toad_Session_Game_Results_Insert_Input>;
  on_conflict?: InputMaybe<Toad_Session_Game_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toad_Session_Game_Results_OneArgs = {
  object: Toad_Session_Game_Results_Insert_Input;
  on_conflict?: InputMaybe<Toad_Session_Game_Results_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toad_Session_GamesArgs = {
  objects: Array<Toad_Session_Games_Insert_Input>;
  on_conflict?: InputMaybe<Toad_Session_Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toad_Session_Games_OneArgs = {
  object: Toad_Session_Games_Insert_Input;
  on_conflict?: InputMaybe<Toad_Session_Games_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toad_SessionsArgs = {
  objects: Array<Toad_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<Toad_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toad_Sessions_OneArgs = {
  object: Toad_Sessions_Insert_Input;
  on_conflict?: InputMaybe<Toad_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Toad_Sessions_To_SendArgs = {
  objects: Array<Toad_Sessions_To_Send_Insert_Input>;
  on_conflict?: InputMaybe<Toad_Sessions_To_Send_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_GroupArgs = {
  _set?: InputMaybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_By_PkArgs = {
  _set?: InputMaybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_ManyArgs = {
  updates: Array<Group_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Group_UserArgs = {
  _set?: InputMaybe<Group_User_Set_Input>;
  where: Group_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Group_User_By_PkArgs = {
  _set?: InputMaybe<Group_User_Set_Input>;
  pk_columns: Group_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Group_User_ManyArgs = {
  updates: Array<Group_User_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_MatchArgs = {
  _set?: InputMaybe<Match_Set_Input>;
  where: Match_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Match_By_PkArgs = {
  _set?: InputMaybe<Match_Set_Input>;
  pk_columns: Match_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Match_ManyArgs = {
  updates: Array<Match_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ResultArgs = {
  _append?: InputMaybe<Result_Append_Input>;
  _delete_at_path?: InputMaybe<Result_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Result_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Result_Delete_Key_Input>;
  _prepend?: InputMaybe<Result_Prepend_Input>;
  _set?: InputMaybe<Result_Set_Input>;
  where: Result_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Result_By_PkArgs = {
  _append?: InputMaybe<Result_Append_Input>;
  _delete_at_path?: InputMaybe<Result_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Result_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Result_Delete_Key_Input>;
  _prepend?: InputMaybe<Result_Prepend_Input>;
  _set?: InputMaybe<Result_Set_Input>;
  pk_columns: Result_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Result_ManyArgs = {
  updates: Array<Result_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Session_Game_ResultsArgs = {
  where: Toad_Session_Game_Results_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Session_Game_Results_By_PkArgs = {
  pk_columns: Toad_Session_Game_Results_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Session_Game_Results_ManyArgs = {
  updates: Array<Toad_Session_Game_Results_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Session_GamesArgs = {
  _set?: InputMaybe<Toad_Session_Games_Set_Input>;
  where: Toad_Session_Games_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Session_Games_By_PkArgs = {
  _set?: InputMaybe<Toad_Session_Games_Set_Input>;
  pk_columns: Toad_Session_Games_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Session_Games_ManyArgs = {
  updates: Array<Toad_Session_Games_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_SessionsArgs = {
  _append?: InputMaybe<Toad_Sessions_Append_Input>;
  _delete_at_path?: InputMaybe<Toad_Sessions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Toad_Sessions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Toad_Sessions_Delete_Key_Input>;
  _inc?: InputMaybe<Toad_Sessions_Inc_Input>;
  _prepend?: InputMaybe<Toad_Sessions_Prepend_Input>;
  _set?: InputMaybe<Toad_Sessions_Set_Input>;
  where: Toad_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Sessions_By_PkArgs = {
  _append?: InputMaybe<Toad_Sessions_Append_Input>;
  _delete_at_path?: InputMaybe<Toad_Sessions_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Toad_Sessions_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Toad_Sessions_Delete_Key_Input>;
  _inc?: InputMaybe<Toad_Sessions_Inc_Input>;
  _prepend?: InputMaybe<Toad_Sessions_Prepend_Input>;
  _set?: InputMaybe<Toad_Sessions_Set_Input>;
  pk_columns: Toad_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Sessions_ManyArgs = {
  updates: Array<Toad_Sessions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Sessions_To_SendArgs = {
  where: Toad_Sessions_To_Send_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Toad_Sessions_To_Send_ManyArgs = {
  updates: Array<Toad_Sessions_To_Send_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _append?: InputMaybe<User_Append_Input>;
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  _prepend?: InputMaybe<User_Prepend_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_ManyArgs = {
  updates: Array<User_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** columns and relationships of "object" */
export type Object = {
  __typename?: 'object';
  attrs: Scalars['jsonb']['output'];
  /** An object relationship */
  author?: Maybe<User>;
  authorId?: Maybe<Scalars['Int']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  childrenRelation: Array<Object_Child>;
  /** An aggregate relationship */
  childrenRelation_aggregate: Object_Child_Aggregate;
  createdAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  events_aggregate: Event_Aggregate;
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregate relationship */
  groups_aggregate: Group_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  matches: Array<Match>;
  /** An aggregate relationship */
  matches_aggregate: Match_Aggregate;
  name?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  object_type: Object_Type;
  /** An array relationship */
  objects: Array<Object>;
  /** An aggregate relationship */
  objects_aggregate: Object_Aggregate;
  /** An array relationship */
  parents: Array<Object_Child>;
  /** An aggregate relationship */
  parents_aggregate: Object_Child_Aggregate;
  /** An array relationship */
  paths: Array<Path>;
  /** An aggregate relationship */
  paths_aggregate: Path_Aggregate;
  /** An array relationship */
  progresses: Array<Progress>;
  /** An aggregate relationship */
  progresses_aggregate: Progress_Aggregate;
  /** An object relationship */
  reference?: Maybe<Object>;
  /** An array relationship */
  registrations: Array<Registration>;
  /** An aggregate relationship */
  registrations_aggregate: Registration_Aggregate;
  /** An array relationship */
  results: Array<Result>;
  /** An aggregate relationship */
  results_aggregate: Result_Aggregate;
  /** An array relationship */
  tasks: Array<Task>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "object" */
export type ObjectAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "object" */
export type ObjectChildrenRelationArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectChildrenRelation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectEventsArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectGroupsArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectMatchesArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectObjectsArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectObjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectParentsArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectParents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectPathsArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectPaths_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectProgressesArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectProgresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectRegistrationsArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectRegistrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectResultsArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectResults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "object" */
export type ObjectTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};

/** aggregated selection of "object" */
export type Object_Aggregate = {
  __typename?: 'object_aggregate';
  aggregate?: Maybe<Object_Aggregate_Fields>;
  nodes: Array<Object>;
};

export type Object_Aggregate_Bool_Exp = {
  count?: InputMaybe<Object_Aggregate_Bool_Exp_Count>;
};

export type Object_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Object_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Object_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "object" */
export type Object_Aggregate_Fields = {
  __typename?: 'object_aggregate_fields';
  avg?: Maybe<Object_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Object_Max_Fields>;
  min?: Maybe<Object_Min_Fields>;
  stddev?: Maybe<Object_Stddev_Fields>;
  stddev_pop?: Maybe<Object_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Object_Stddev_Samp_Fields>;
  sum?: Maybe<Object_Sum_Fields>;
  var_pop?: Maybe<Object_Var_Pop_Fields>;
  var_samp?: Maybe<Object_Var_Samp_Fields>;
  variance?: Maybe<Object_Variance_Fields>;
};


/** aggregate fields of "object" */
export type Object_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Object_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "object" */
export type Object_Aggregate_Order_By = {
  avg?: InputMaybe<Object_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Object_Max_Order_By>;
  min?: InputMaybe<Object_Min_Order_By>;
  stddev?: InputMaybe<Object_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Object_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Object_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Object_Sum_Order_By>;
  var_pop?: InputMaybe<Object_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Object_Var_Samp_Order_By>;
  variance?: InputMaybe<Object_Variance_Order_By>;
};

/** Users available per project */
export type Object_Availability = {
  __typename?: 'object_availability';
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Event;
  eventId: Scalars['Int']['output'];
  eventUserId: Scalars['Int']['output'];
  /** An object relationship */
  event_user: Event_User;
  id: Scalars['Int']['output'];
  /** An array relationship */
  invites: Array<Group_User>;
  /** An aggregate relationship */
  invites_aggregate: Group_User_Aggregate;
  login: Scalars['String']['output'];
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  /** An array relationship */
  records: Array<Record>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: User;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId: Scalars['Int']['output'];
  /** An array relationship */
  userRecords: Array<Record_Public_View>;
  /** An aggregate relationship */
  userRecords_aggregate: Record_Public_View_Aggregate;
  /** An object relationship */
  user_view?: Maybe<User_Public_View>;
};


/** Users available per project */
export type Object_AvailabilityInvitesArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


/** Users available per project */
export type Object_AvailabilityInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


/** Users available per project */
export type Object_AvailabilityRecordsArgs = {
  distinct_on?: InputMaybe<Array<Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Order_By>>;
  where?: InputMaybe<Record_Bool_Exp>;
};


/** Users available per project */
export type Object_AvailabilityUserRecordsArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


/** Users available per project */
export type Object_AvailabilityUserRecords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};

/** aggregated selection of "object_availability" */
export type Object_Availability_Aggregate = {
  __typename?: 'object_availability_aggregate';
  aggregate?: Maybe<Object_Availability_Aggregate_Fields>;
  nodes: Array<Object_Availability>;
};

export type Object_Availability_Aggregate_Bool_Exp = {
  count?: InputMaybe<Object_Availability_Aggregate_Bool_Exp_Count>;
};

export type Object_Availability_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Object_Availability_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Object_Availability_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "object_availability" */
export type Object_Availability_Aggregate_Fields = {
  __typename?: 'object_availability_aggregate_fields';
  avg?: Maybe<Object_Availability_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Object_Availability_Max_Fields>;
  min?: Maybe<Object_Availability_Min_Fields>;
  stddev?: Maybe<Object_Availability_Stddev_Fields>;
  stddev_pop?: Maybe<Object_Availability_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Object_Availability_Stddev_Samp_Fields>;
  sum?: Maybe<Object_Availability_Sum_Fields>;
  var_pop?: Maybe<Object_Availability_Var_Pop_Fields>;
  var_samp?: Maybe<Object_Availability_Var_Samp_Fields>;
  variance?: Maybe<Object_Availability_Variance_Fields>;
};


/** aggregate fields of "object_availability" */
export type Object_Availability_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Object_Availability_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "object_availability" */
export type Object_Availability_Aggregate_Order_By = {
  avg?: InputMaybe<Object_Availability_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Object_Availability_Max_Order_By>;
  min?: InputMaybe<Object_Availability_Min_Order_By>;
  stddev?: InputMaybe<Object_Availability_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Object_Availability_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Object_Availability_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Object_Availability_Sum_Order_By>;
  var_pop?: InputMaybe<Object_Availability_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Object_Availability_Var_Samp_Order_By>;
  variance?: InputMaybe<Object_Availability_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Object_Availability_Avg_Fields = {
  __typename?: 'object_availability_avg_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  eventUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "object_availability" */
export type Object_Availability_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "object_availability". All fields are combined with a logical 'AND'. */
export type Object_Availability_Bool_Exp = {
  _and?: InputMaybe<Array<Object_Availability_Bool_Exp>>;
  _not?: InputMaybe<Object_Availability_Bool_Exp>;
  _or?: InputMaybe<Array<Object_Availability_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  eventUserId?: InputMaybe<Int_Comparison_Exp>;
  event_user?: InputMaybe<Event_User_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  invites?: InputMaybe<Group_User_Bool_Exp>;
  invites_aggregate?: InputMaybe<Group_User_Aggregate_Bool_Exp>;
  login?: InputMaybe<String_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  records?: InputMaybe<Record_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userAuditRatio?: InputMaybe<Float8_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userRecords?: InputMaybe<Record_Public_View_Bool_Exp>;
  userRecords_aggregate?: InputMaybe<Record_Public_View_Aggregate_Bool_Exp>;
  user_view?: InputMaybe<User_Public_View_Bool_Exp>;
};

/** aggregate max on columns */
export type Object_Availability_Max_Fields = {
  __typename?: 'object_availability_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  eventUserId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "object_availability" */
export type Object_Availability_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Object_Availability_Min_Fields = {
  __typename?: 'object_availability_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  eventUserId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "object_availability" */
export type Object_Availability_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "object_availability". */
export type Object_Availability_Order_By = {
  created_at?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  event_user?: InputMaybe<Event_User_Order_By>;
  id?: InputMaybe<Order_By>;
  invites_aggregate?: InputMaybe<Group_User_Aggregate_Order_By>;
  login?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  records_aggregate?: InputMaybe<Record_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userAuditRatio?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  userRecords_aggregate?: InputMaybe<Record_Public_View_Aggregate_Order_By>;
  user_view?: InputMaybe<User_Public_View_Order_By>;
};

/** select columns of table "object_availability" */
export enum Object_Availability_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventId = 'eventId',
  /** column name */
  EventUserId = 'eventUserId',
  /** column name */
  Id = 'id',
  /** column name */
  Login = 'login',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Object_Availability_Stddev_Fields = {
  __typename?: 'object_availability_stddev_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  eventUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "object_availability" */
export type Object_Availability_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Object_Availability_Stddev_Pop_Fields = {
  __typename?: 'object_availability_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  eventUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "object_availability" */
export type Object_Availability_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Object_Availability_Stddev_Samp_Fields = {
  __typename?: 'object_availability_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  eventUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "object_availability" */
export type Object_Availability_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "object_availability" */
export type Object_Availability_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Object_Availability_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Object_Availability_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  eventUserId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Object_Availability_Sum_Fields = {
  __typename?: 'object_availability_sum_fields';
  eventId?: Maybe<Scalars['Int']['output']>;
  eventUserId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "object_availability" */
export type Object_Availability_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Object_Availability_Var_Pop_Fields = {
  __typename?: 'object_availability_var_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  eventUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "object_availability" */
export type Object_Availability_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Object_Availability_Var_Samp_Fields = {
  __typename?: 'object_availability_var_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  eventUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "object_availability" */
export type Object_Availability_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Object_Availability_Variance_Fields = {
  __typename?: 'object_availability_variance_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  eventUserId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userAuditRatio?: Maybe<Scalars['float8']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "object_availability" */
export type Object_Availability_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  eventUserId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate avg on columns */
export type Object_Avg_Fields = {
  __typename?: 'object_avg_fields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "object" */
export type Object_Avg_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "object". All fields are combined with a logical 'AND'. */
export type Object_Bool_Exp = {
  _and?: InputMaybe<Array<Object_Bool_Exp>>;
  _not?: InputMaybe<Object_Bool_Exp>;
  _or?: InputMaybe<Array<Object_Bool_Exp>>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  author?: InputMaybe<User_Bool_Exp>;
  authorId?: InputMaybe<Int_Comparison_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  childrenRelation?: InputMaybe<Object_Child_Bool_Exp>;
  childrenRelation_aggregate?: InputMaybe<Object_Child_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  events?: InputMaybe<Event_Bool_Exp>;
  events_aggregate?: InputMaybe<Event_Aggregate_Bool_Exp>;
  groups?: InputMaybe<Group_Bool_Exp>;
  groups_aggregate?: InputMaybe<Group_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  matches?: InputMaybe<Match_Bool_Exp>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  object_type?: InputMaybe<Object_Type_Bool_Exp>;
  objects?: InputMaybe<Object_Bool_Exp>;
  objects_aggregate?: InputMaybe<Object_Aggregate_Bool_Exp>;
  parents?: InputMaybe<Object_Child_Bool_Exp>;
  parents_aggregate?: InputMaybe<Object_Child_Aggregate_Bool_Exp>;
  paths?: InputMaybe<Path_Bool_Exp>;
  paths_aggregate?: InputMaybe<Path_Aggregate_Bool_Exp>;
  progresses?: InputMaybe<Progress_Bool_Exp>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Bool_Exp>;
  reference?: InputMaybe<Object_Bool_Exp>;
  registrations?: InputMaybe<Registration_Bool_Exp>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Bool_Exp>;
  results?: InputMaybe<Result_Bool_Exp>;
  results_aggregate?: InputMaybe<Result_Aggregate_Bool_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** columns and relationships of "object_child" */
export type Object_Child = {
  __typename?: 'object_child';
  attrs: Scalars['jsonb']['output'];
  /** An object relationship */
  child: Object;
  childId: Scalars['Int']['output'];
  /** An array relationship */
  formerVersions: Array<Object_Child>;
  /** An aggregate relationship */
  formerVersions_aggregate: Object_Child_Aggregate;
  id: Scalars['Int']['output'];
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Int']['output']>;
  key: Scalars['String']['output'];
  /** An array relationship */
  latestVersion: Array<Object_Child>;
  /** An aggregate relationship */
  latestVersion_aggregate: Object_Child_Aggregate;
  /** An object relationship */
  parent: Object;
  parentId: Scalars['Int']['output'];
  /** An array relationship */
  paths: Array<Path>;
  /** An aggregate relationship */
  paths_aggregate: Path_Aggregate;
  /** Timestamp indicating when this content was replaced by onother relation */
  replacedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "object_child" */
export type Object_ChildAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "object_child" */
export type Object_ChildFormerVersionsArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object_child" */
export type Object_ChildFormerVersions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object_child" */
export type Object_ChildLatestVersionArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object_child" */
export type Object_ChildLatestVersion_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


/** columns and relationships of "object_child" */
export type Object_ChildPathsArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


/** columns and relationships of "object_child" */
export type Object_ChildPaths_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};

/** aggregated selection of "object_child" */
export type Object_Child_Aggregate = {
  __typename?: 'object_child_aggregate';
  aggregate?: Maybe<Object_Child_Aggregate_Fields>;
  nodes: Array<Object_Child>;
};

export type Object_Child_Aggregate_Bool_Exp = {
  count?: InputMaybe<Object_Child_Aggregate_Bool_Exp_Count>;
};

export type Object_Child_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Object_Child_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Object_Child_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "object_child" */
export type Object_Child_Aggregate_Fields = {
  __typename?: 'object_child_aggregate_fields';
  avg?: Maybe<Object_Child_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Object_Child_Max_Fields>;
  min?: Maybe<Object_Child_Min_Fields>;
  stddev?: Maybe<Object_Child_Stddev_Fields>;
  stddev_pop?: Maybe<Object_Child_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Object_Child_Stddev_Samp_Fields>;
  sum?: Maybe<Object_Child_Sum_Fields>;
  var_pop?: Maybe<Object_Child_Var_Pop_Fields>;
  var_samp?: Maybe<Object_Child_Var_Samp_Fields>;
  variance?: Maybe<Object_Child_Variance_Fields>;
};


/** aggregate fields of "object_child" */
export type Object_Child_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Object_Child_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "object_child" */
export type Object_Child_Aggregate_Order_By = {
  avg?: InputMaybe<Object_Child_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Object_Child_Max_Order_By>;
  min?: InputMaybe<Object_Child_Min_Order_By>;
  stddev?: InputMaybe<Object_Child_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Object_Child_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Object_Child_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Object_Child_Sum_Order_By>;
  var_pop?: InputMaybe<Object_Child_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Object_Child_Var_Samp_Order_By>;
  variance?: InputMaybe<Object_Child_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Object_Child_Avg_Fields = {
  __typename?: 'object_child_avg_fields';
  childId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "object_child" */
export type Object_Child_Avg_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "object_child". All fields are combined with a logical 'AND'. */
export type Object_Child_Bool_Exp = {
  _and?: InputMaybe<Array<Object_Child_Bool_Exp>>;
  _not?: InputMaybe<Object_Child_Bool_Exp>;
  _or?: InputMaybe<Array<Object_Child_Bool_Exp>>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  child?: InputMaybe<Object_Bool_Exp>;
  childId?: InputMaybe<Int_Comparison_Exp>;
  formerVersions?: InputMaybe<Object_Child_Bool_Exp>;
  formerVersions_aggregate?: InputMaybe<Object_Child_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  latestVersion?: InputMaybe<Object_Child_Bool_Exp>;
  latestVersion_aggregate?: InputMaybe<Object_Child_Aggregate_Bool_Exp>;
  parent?: InputMaybe<Object_Bool_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  paths?: InputMaybe<Path_Bool_Exp>;
  paths_aggregate?: InputMaybe<Path_Aggregate_Bool_Exp>;
  replacedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  replacedBy?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Object_Child_Max_Fields = {
  __typename?: 'object_child_max_fields';
  childId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp indicating when this content was replaced by onother relation */
  replacedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "object_child" */
export type Object_Child_Max_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Timestamp indicating when this content was replaced by onother relation */
  replacedAt?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Object_Child_Min_Fields = {
  __typename?: 'object_child_min_fields';
  childId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Timestamp indicating when this content was replaced by onother relation */
  replacedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "object_child" */
export type Object_Child_Min_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Timestamp indicating when this content was replaced by onother relation */
  replacedAt?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "object_child". */
export type Object_Child_Order_By = {
  attrs?: InputMaybe<Order_By>;
  child?: InputMaybe<Object_Order_By>;
  childId?: InputMaybe<Order_By>;
  formerVersions_aggregate?: InputMaybe<Object_Child_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  latestVersion_aggregate?: InputMaybe<Object_Child_Aggregate_Order_By>;
  parent?: InputMaybe<Object_Order_By>;
  parentId?: InputMaybe<Order_By>;
  paths_aggregate?: InputMaybe<Path_Aggregate_Order_By>;
  replacedAt?: InputMaybe<Order_By>;
  replacedBy?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "object_child" */
export enum Object_Child_Select_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  ChildId = 'childId',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Key = 'key',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  ReplacedAt = 'replacedAt',
  /** column name */
  ReplacedBy = 'replacedBy',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Object_Child_Stddev_Fields = {
  __typename?: 'object_child_stddev_fields';
  childId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "object_child" */
export type Object_Child_Stddev_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Object_Child_Stddev_Pop_Fields = {
  __typename?: 'object_child_stddev_pop_fields';
  childId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "object_child" */
export type Object_Child_Stddev_Pop_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Object_Child_Stddev_Samp_Fields = {
  __typename?: 'object_child_stddev_samp_fields';
  childId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "object_child" */
export type Object_Child_Stddev_Samp_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "object_child" */
export type Object_Child_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Object_Child_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Object_Child_Stream_Cursor_Value_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  childId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Timestamp indicating when this content was replaced by onother relation */
  replacedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Object_Child_Sum_Fields = {
  __typename?: 'object_child_sum_fields';
  childId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "object_child" */
export type Object_Child_Sum_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Object_Child_Var_Pop_Fields = {
  __typename?: 'object_child_var_pop_fields';
  childId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "object_child" */
export type Object_Child_Var_Pop_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Object_Child_Var_Samp_Fields = {
  __typename?: 'object_child_var_samp_fields';
  childId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "object_child" */
export type Object_Child_Var_Samp_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Object_Child_Variance_Fields = {
  __typename?: 'object_child_variance_fields';
  childId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "object_child" */
export type Object_Child_Variance_Order_By = {
  childId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  /** Deprecated for object_child which parent is a module object - set to NULL */
  index?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  /** Reference t o the object_child entry that replaces this one. Used to link versions in replacements */
  replacedBy?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Object_Max_Fields = {
  __typename?: 'object_max_fields';
  authorId?: Maybe<Scalars['Int']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "object" */
export type Object_Max_Order_By = {
  authorId?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Object_Min_Fields = {
  __typename?: 'object_min_fields';
  authorId?: Maybe<Scalars['Int']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "object" */
export type Object_Min_Order_By = {
  authorId?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "object". */
export type Object_Order_By = {
  attrs?: InputMaybe<Order_By>;
  author?: InputMaybe<User_Order_By>;
  authorId?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  childrenRelation_aggregate?: InputMaybe<Object_Child_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  events_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
  groups_aggregate?: InputMaybe<Group_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  object_type?: InputMaybe<Object_Type_Order_By>;
  objects_aggregate?: InputMaybe<Object_Aggregate_Order_By>;
  parents_aggregate?: InputMaybe<Object_Child_Aggregate_Order_By>;
  paths_aggregate?: InputMaybe<Path_Aggregate_Order_By>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Order_By>;
  reference?: InputMaybe<Object_Order_By>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Order_By>;
  results_aggregate?: InputMaybe<Result_Aggregate_Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "object" */
export enum Object_Select_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  Campus = 'campus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Object_Stddev_Fields = {
  __typename?: 'object_stddev_fields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "object" */
export type Object_Stddev_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Object_Stddev_Pop_Fields = {
  __typename?: 'object_stddev_pop_fields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "object" */
export type Object_Stddev_Pop_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Object_Stddev_Samp_Fields = {
  __typename?: 'object_stddev_samp_fields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "object" */
export type Object_Stddev_Samp_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "object" */
export type Object_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Object_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Object_Stream_Cursor_Value_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  authorId?: InputMaybe<Scalars['Int']['input']>;
  campus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Object_Sum_Fields = {
  __typename?: 'object_sum_fields';
  authorId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "object" */
export type Object_Sum_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "object_type" */
export type Object_Type = {
  __typename?: 'object_type';
  /** An array relationship */
  objects: Array<Object>;
  /** An aggregate relationship */
  objects_aggregate: Object_Aggregate;
  type: Scalars['String']['output'];
};


/** columns and relationships of "object_type" */
export type Object_TypeObjectsArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


/** columns and relationships of "object_type" */
export type Object_TypeObjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};

/** aggregated selection of "object_type" */
export type Object_Type_Aggregate = {
  __typename?: 'object_type_aggregate';
  aggregate?: Maybe<Object_Type_Aggregate_Fields>;
  nodes: Array<Object_Type>;
};

/** aggregate fields of "object_type" */
export type Object_Type_Aggregate_Fields = {
  __typename?: 'object_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Object_Type_Max_Fields>;
  min?: Maybe<Object_Type_Min_Fields>;
};


/** aggregate fields of "object_type" */
export type Object_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Object_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "object_type". All fields are combined with a logical 'AND'. */
export type Object_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Object_Type_Bool_Exp>>;
  _not?: InputMaybe<Object_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Object_Type_Bool_Exp>>;
  objects?: InputMaybe<Object_Bool_Exp>;
  objects_aggregate?: InputMaybe<Object_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Object_Type_Max_Fields = {
  __typename?: 'object_type_max_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Object_Type_Min_Fields = {
  __typename?: 'object_type_min_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "object_type". */
export type Object_Type_Order_By = {
  objects_aggregate?: InputMaybe<Object_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "object_type" */
export enum Object_Type_Select_Column {
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "object_type" */
export type Object_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Object_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Object_Type_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate var_pop on columns */
export type Object_Var_Pop_Fields = {
  __typename?: 'object_var_pop_fields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "object" */
export type Object_Var_Pop_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Object_Var_Samp_Fields = {
  __typename?: 'object_var_samp_fields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "object" */
export type Object_Var_Samp_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Object_Variance_Fields = {
  __typename?: 'object_variance_fields';
  authorId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "object" */
export type Object_Variance_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "path" */
export type Path = {
  __typename?: 'path';
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  events_aggregate: Event_Aggregate;
  /** An array relationship */
  groups: Array<Group>;
  /** An aggregate relationship */
  groups_aggregate: Group_Aggregate;
  /** An array relationship */
  matches: Array<Match>;
  /** An aggregate relationship */
  matches_aggregate: Match_Aggregate;
  /** An object relationship */
  object?: Maybe<Object>;
  /** An array relationship */
  objectAvailabilities: Array<Object_Availability>;
  /** An aggregate relationship */
  objectAvailabilities_aggregate: Object_Availability_Aggregate;
  objectChildId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  object_child?: Maybe<Object_Child>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path: Scalars['String']['output'];
  /** An array relationship */
  path_archives: Array<Path_Archive>;
  /** An aggregate relationship */
  path_archives_aggregate: Path_Archive_Aggregate;
  /** An array relationship */
  progresses: Array<Progress>;
  /** An aggregate relationship */
  progresses_aggregate: Progress_Aggregate;
  /** An array relationship */
  registrations: Array<Registration>;
  /** An aggregate relationship */
  registrations_aggregate: Registration_Aggregate;
  /** An array relationship */
  results: Array<Result>;
  /** An aggregate relationship */
  results_aggregate: Result_Aggregate;
  /** An array relationship */
  tasks: Array<Task>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "path" */
export type PathEventsArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathGroupsArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathMatchesArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathObjectAvailabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathObjectAvailabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathPath_ArchivesArgs = {
  distinct_on?: InputMaybe<Array<Path_Archive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Archive_Order_By>>;
  where?: InputMaybe<Path_Archive_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathPath_Archives_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Path_Archive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Archive_Order_By>>;
  where?: InputMaybe<Path_Archive_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathProgressesArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathProgresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathRegistrationsArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathRegistrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathResultsArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathResults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathTasksArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "path" */
export type PathTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "path" */
export type Path_Aggregate = {
  __typename?: 'path_aggregate';
  aggregate?: Maybe<Path_Aggregate_Fields>;
  nodes: Array<Path>;
};

export type Path_Aggregate_Bool_Exp = {
  count?: InputMaybe<Path_Aggregate_Bool_Exp_Count>;
};

export type Path_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Path_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Path_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "path" */
export type Path_Aggregate_Fields = {
  __typename?: 'path_aggregate_fields';
  avg?: Maybe<Path_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Path_Max_Fields>;
  min?: Maybe<Path_Min_Fields>;
  stddev?: Maybe<Path_Stddev_Fields>;
  stddev_pop?: Maybe<Path_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Path_Stddev_Samp_Fields>;
  sum?: Maybe<Path_Sum_Fields>;
  var_pop?: Maybe<Path_Var_Pop_Fields>;
  var_samp?: Maybe<Path_Var_Samp_Fields>;
  variance?: Maybe<Path_Variance_Fields>;
};


/** aggregate fields of "path" */
export type Path_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Path_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "path" */
export type Path_Aggregate_Order_By = {
  avg?: InputMaybe<Path_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Path_Max_Order_By>;
  min?: InputMaybe<Path_Min_Order_By>;
  stddev?: InputMaybe<Path_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Path_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Path_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Path_Sum_Order_By>;
  var_pop?: InputMaybe<Path_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Path_Var_Samp_Order_By>;
  variance?: InputMaybe<Path_Variance_Order_By>;
};

/** columns and relationships of "path_archive" */
export type Path_Archive = {
  __typename?: 'path_archive';
  attrs?: Maybe<Scalars['jsonb']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  index?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  pathByPath?: Maybe<Path>;
  status?: Maybe<Path_Status_Enum>;
  updatedAt: Scalars['timestamptz']['output'];
};


/** columns and relationships of "path_archive" */
export type Path_ArchiveAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "path_archive" */
export type Path_Archive_Aggregate = {
  __typename?: 'path_archive_aggregate';
  aggregate?: Maybe<Path_Archive_Aggregate_Fields>;
  nodes: Array<Path_Archive>;
};

export type Path_Archive_Aggregate_Bool_Exp = {
  count?: InputMaybe<Path_Archive_Aggregate_Bool_Exp_Count>;
};

export type Path_Archive_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Path_Archive_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Path_Archive_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "path_archive" */
export type Path_Archive_Aggregate_Fields = {
  __typename?: 'path_archive_aggregate_fields';
  avg?: Maybe<Path_Archive_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Path_Archive_Max_Fields>;
  min?: Maybe<Path_Archive_Min_Fields>;
  stddev?: Maybe<Path_Archive_Stddev_Fields>;
  stddev_pop?: Maybe<Path_Archive_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Path_Archive_Stddev_Samp_Fields>;
  sum?: Maybe<Path_Archive_Sum_Fields>;
  var_pop?: Maybe<Path_Archive_Var_Pop_Fields>;
  var_samp?: Maybe<Path_Archive_Var_Samp_Fields>;
  variance?: Maybe<Path_Archive_Variance_Fields>;
};


/** aggregate fields of "path_archive" */
export type Path_Archive_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Path_Archive_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "path_archive" */
export type Path_Archive_Aggregate_Order_By = {
  avg?: InputMaybe<Path_Archive_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Path_Archive_Max_Order_By>;
  min?: InputMaybe<Path_Archive_Min_Order_By>;
  stddev?: InputMaybe<Path_Archive_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Path_Archive_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Path_Archive_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Path_Archive_Sum_Order_By>;
  var_pop?: InputMaybe<Path_Archive_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Path_Archive_Var_Samp_Order_By>;
  variance?: InputMaybe<Path_Archive_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Path_Archive_Avg_Fields = {
  __typename?: 'path_archive_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "path_archive" */
export type Path_Archive_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "path_archive". All fields are combined with a logical 'AND'. */
export type Path_Archive_Bool_Exp = {
  _and?: InputMaybe<Array<Path_Archive_Bool_Exp>>;
  _not?: InputMaybe<Path_Archive_Bool_Exp>;
  _or?: InputMaybe<Array<Path_Archive_Bool_Exp>>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  index?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  status?: InputMaybe<Path_Status_Enum_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Path_Archive_Max_Fields = {
  __typename?: 'path_archive_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "path_archive" */
export type Path_Archive_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Path_Archive_Min_Fields = {
  __typename?: 'path_archive_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "path_archive" */
export type Path_Archive_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "path_archive". */
export type Path_Archive_Order_By = {
  attrs?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "path_archive" */
export enum Path_Archive_Select_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Index = 'index',
  /** column name */
  Path = 'path',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Path_Archive_Stddev_Fields = {
  __typename?: 'path_archive_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "path_archive" */
export type Path_Archive_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Path_Archive_Stddev_Pop_Fields = {
  __typename?: 'path_archive_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "path_archive" */
export type Path_Archive_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Path_Archive_Stddev_Samp_Fields = {
  __typename?: 'path_archive_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "path_archive" */
export type Path_Archive_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "path_archive" */
export type Path_Archive_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Path_Archive_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Path_Archive_Stream_Cursor_Value_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  index?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Path_Status_Enum>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Path_Archive_Sum_Fields = {
  __typename?: 'path_archive_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "path_archive" */
export type Path_Archive_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Path_Archive_Var_Pop_Fields = {
  __typename?: 'path_archive_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "path_archive" */
export type Path_Archive_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Path_Archive_Var_Samp_Fields = {
  __typename?: 'path_archive_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "path_archive" */
export type Path_Archive_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Path_Archive_Variance_Fields = {
  __typename?: 'path_archive_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  index?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "path_archive" */
export type Path_Archive_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  index?: InputMaybe<Order_By>;
};

/** aggregate avg on columns */
export type Path_Avg_Fields = {
  __typename?: 'path_avg_fields';
  objectChildId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "path" */
export type Path_Avg_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "path". All fields are combined with a logical 'AND'. */
export type Path_Bool_Exp = {
  _and?: InputMaybe<Array<Path_Bool_Exp>>;
  _not?: InputMaybe<Path_Bool_Exp>;
  _or?: InputMaybe<Array<Path_Bool_Exp>>;
  events?: InputMaybe<Event_Bool_Exp>;
  events_aggregate?: InputMaybe<Event_Aggregate_Bool_Exp>;
  groups?: InputMaybe<Group_Bool_Exp>;
  groups_aggregate?: InputMaybe<Group_Aggregate_Bool_Exp>;
  matches?: InputMaybe<Match_Bool_Exp>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Bool_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectAvailabilities?: InputMaybe<Object_Availability_Bool_Exp>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Bool_Exp>;
  objectChildId?: InputMaybe<Int_Comparison_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  object_child?: InputMaybe<Object_Child_Bool_Exp>;
  parentId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  path_archives?: InputMaybe<Path_Archive_Bool_Exp>;
  path_archives_aggregate?: InputMaybe<Path_Archive_Aggregate_Bool_Exp>;
  progresses?: InputMaybe<Progress_Bool_Exp>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Bool_Exp>;
  registrations?: InputMaybe<Registration_Bool_Exp>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Bool_Exp>;
  results?: InputMaybe<Result_Bool_Exp>;
  results_aggregate?: InputMaybe<Result_Aggregate_Bool_Exp>;
  tasks?: InputMaybe<Task_Bool_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Path_Max_Fields = {
  __typename?: 'path_max_fields';
  objectChildId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "path" */
export type Path_Max_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Path_Min_Fields = {
  __typename?: 'path_min_fields';
  objectChildId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "path" */
export type Path_Min_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "path". */
export type Path_Order_By = {
  events_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
  groups_aggregate?: InputMaybe<Group_Aggregate_Order_By>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Order_By>;
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  object_child?: InputMaybe<Object_Child_Order_By>;
  parentId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  path_archives_aggregate?: InputMaybe<Path_Archive_Aggregate_Order_By>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Order_By>;
  registrations_aggregate?: InputMaybe<Registration_Aggregate_Order_By>;
  results_aggregate?: InputMaybe<Result_Aggregate_Order_By>;
  tasks_aggregate?: InputMaybe<Task_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "path" */
export enum Path_Select_Column {
  /** column name */
  ObjectChildId = 'objectChildId',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  ParentId = 'parentId',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export enum Path_Status_Enum {
  Deleted = 'deleted',
  Renamed = 'renamed'
}

/** Boolean expression to compare columns of type "path_status_enum". All fields are combined with logical 'AND'. */
export type Path_Status_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Path_Status_Enum>;
  _in?: InputMaybe<Array<Path_Status_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Path_Status_Enum>;
  _nin?: InputMaybe<Array<Path_Status_Enum>>;
};

/** aggregate stddev on columns */
export type Path_Stddev_Fields = {
  __typename?: 'path_stddev_fields';
  objectChildId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "path" */
export type Path_Stddev_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Path_Stddev_Pop_Fields = {
  __typename?: 'path_stddev_pop_fields';
  objectChildId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "path" */
export type Path_Stddev_Pop_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Path_Stddev_Samp_Fields = {
  __typename?: 'path_stddev_samp_fields';
  objectChildId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "path" */
export type Path_Stddev_Samp_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "path" */
export type Path_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Path_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Path_Stream_Cursor_Value_Input = {
  objectChildId?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Path_Sum_Fields = {
  __typename?: 'path_sum_fields';
  objectChildId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  parentId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "path" */
export type Path_Sum_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Path_Var_Pop_Fields = {
  __typename?: 'path_var_pop_fields';
  objectChildId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "path" */
export type Path_Var_Pop_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Path_Var_Samp_Fields = {
  __typename?: 'path_var_samp_fields';
  objectChildId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "path" */
export type Path_Var_Samp_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Path_Variance_Fields = {
  __typename?: 'path_variance_fields';
  objectChildId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  parentId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "path" */
export type Path_Variance_Order_By = {
  objectChildId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  parentId?: InputMaybe<Order_By>;
};

/** columns and relationships of "progress" */
export type Progress = {
  __typename?: 'progress';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['bigint']['output'];
  isDone: Scalars['Boolean']['output'];
  /** An object relationship */
  object: Object;
  objectId: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  /** An array relationship */
  results: Array<Result>;
  /** An aggregate relationship */
  results_aggregate: Result_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int']['output'];
  userLogin?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "progress" */
export type ProgressResultsArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "progress" */
export type ProgressResults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};

/** aggregated selection of "progress" */
export type Progress_Aggregate = {
  __typename?: 'progress_aggregate';
  aggregate?: Maybe<Progress_Aggregate_Fields>;
  nodes: Array<Progress>;
};

export type Progress_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Progress_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Progress_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Progress_Aggregate_Bool_Exp_Count>;
};

export type Progress_Aggregate_Bool_Exp_Bool_And = {
  arguments: Progress_Select_Column_Progress_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Progress_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Progress_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Progress_Select_Column_Progress_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Progress_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Progress_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Progress_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Progress_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "progress" */
export type Progress_Aggregate_Fields = {
  __typename?: 'progress_aggregate_fields';
  avg?: Maybe<Progress_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Progress_Max_Fields>;
  min?: Maybe<Progress_Min_Fields>;
  stddev?: Maybe<Progress_Stddev_Fields>;
  stddev_pop?: Maybe<Progress_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Progress_Stddev_Samp_Fields>;
  sum?: Maybe<Progress_Sum_Fields>;
  var_pop?: Maybe<Progress_Var_Pop_Fields>;
  var_samp?: Maybe<Progress_Var_Samp_Fields>;
  variance?: Maybe<Progress_Variance_Fields>;
};


/** aggregate fields of "progress" */
export type Progress_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Progress_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "progress" */
export type Progress_Aggregate_Order_By = {
  avg?: InputMaybe<Progress_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Progress_Max_Order_By>;
  min?: InputMaybe<Progress_Min_Order_By>;
  stddev?: InputMaybe<Progress_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Progress_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Progress_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Progress_Sum_Order_By>;
  var_pop?: InputMaybe<Progress_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Progress_Var_Samp_Order_By>;
  variance?: InputMaybe<Progress_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Progress_Avg_Fields = {
  __typename?: 'progress_avg_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "progress" */
export type Progress_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "progress". All fields are combined with a logical 'AND'. */
export type Progress_Bool_Exp = {
  _and?: InputMaybe<Array<Progress_Bool_Exp>>;
  _not?: InputMaybe<Progress_Bool_Exp>;
  _or?: InputMaybe<Array<Progress_Bool_Exp>>;
  campus?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  grade?: InputMaybe<Numeric_Comparison_Exp>;
  group?: InputMaybe<Group_Bool_Exp>;
  groupId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  isDone?: InputMaybe<Boolean_Comparison_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  results?: InputMaybe<Result_Bool_Exp>;
  results_aggregate?: InputMaybe<Result_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** columns and relationships of "progress_by_path_view" */
export type Progress_By_Path_View = {
  __typename?: 'progress_by_path_view';
  /** An object relationship */
  bestProgress?: Maybe<Progress>;
  bestProgressVersion?: Maybe<Scalars['String']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  lastProgress?: Maybe<Progress>;
  lastProgressId?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  object?: Maybe<Object>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  succeeded?: Maybe<Scalars['Boolean']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "progress_by_path_view" */
export type Progress_By_Path_View_Aggregate = {
  __typename?: 'progress_by_path_view_aggregate';
  aggregate?: Maybe<Progress_By_Path_View_Aggregate_Fields>;
  nodes: Array<Progress_By_Path_View>;
};

export type Progress_By_Path_View_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Progress_By_Path_View_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Progress_By_Path_View_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Progress_By_Path_View_Aggregate_Bool_Exp_Count>;
};

export type Progress_By_Path_View_Aggregate_Bool_Exp_Bool_And = {
  arguments: Progress_By_Path_View_Select_Column_Progress_By_Path_View_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Progress_By_Path_View_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Progress_By_Path_View_Select_Column_Progress_By_Path_View_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Progress_By_Path_View_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "progress_by_path_view" */
export type Progress_By_Path_View_Aggregate_Fields = {
  __typename?: 'progress_by_path_view_aggregate_fields';
  avg?: Maybe<Progress_By_Path_View_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Progress_By_Path_View_Max_Fields>;
  min?: Maybe<Progress_By_Path_View_Min_Fields>;
  stddev?: Maybe<Progress_By_Path_View_Stddev_Fields>;
  stddev_pop?: Maybe<Progress_By_Path_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Progress_By_Path_View_Stddev_Samp_Fields>;
  sum?: Maybe<Progress_By_Path_View_Sum_Fields>;
  var_pop?: Maybe<Progress_By_Path_View_Var_Pop_Fields>;
  var_samp?: Maybe<Progress_By_Path_View_Var_Samp_Fields>;
  variance?: Maybe<Progress_By_Path_View_Variance_Fields>;
};


/** aggregate fields of "progress_by_path_view" */
export type Progress_By_Path_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "progress_by_path_view" */
export type Progress_By_Path_View_Aggregate_Order_By = {
  avg?: InputMaybe<Progress_By_Path_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Progress_By_Path_View_Max_Order_By>;
  min?: InputMaybe<Progress_By_Path_View_Min_Order_By>;
  stddev?: InputMaybe<Progress_By_Path_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Progress_By_Path_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Progress_By_Path_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Progress_By_Path_View_Sum_Order_By>;
  var_pop?: InputMaybe<Progress_By_Path_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Progress_By_Path_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Progress_By_Path_View_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Progress_By_Path_View_Avg_Fields = {
  __typename?: 'progress_by_path_view_avg_fields';
  count?: Maybe<Scalars['Float']['output']>;
  lastProgressId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Avg_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "progress_by_path_view". All fields are combined with a logical 'AND'. */
export type Progress_By_Path_View_Bool_Exp = {
  _and?: InputMaybe<Array<Progress_By_Path_View_Bool_Exp>>;
  _not?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
  _or?: InputMaybe<Array<Progress_By_Path_View_Bool_Exp>>;
  bestProgress?: InputMaybe<Progress_Bool_Exp>;
  bestProgressVersion?: InputMaybe<String_Comparison_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  count?: InputMaybe<Bigint_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  lastProgress?: InputMaybe<Progress_Bool_Exp>;
  lastProgressId?: InputMaybe<Bigint_Comparison_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  succeeded?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Progress_By_Path_View_Max_Fields = {
  __typename?: 'progress_by_path_view_max_fields';
  bestProgressVersion?: Maybe<Scalars['String']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  lastProgressId?: Maybe<Scalars['bigint']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Max_Order_By = {
  bestProgressVersion?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Progress_By_Path_View_Min_Fields = {
  __typename?: 'progress_by_path_view_min_fields';
  bestProgressVersion?: Maybe<Scalars['String']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['bigint']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  lastProgressId?: Maybe<Scalars['bigint']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Min_Order_By = {
  bestProgressVersion?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "progress_by_path_view". */
export type Progress_By_Path_View_Order_By = {
  bestProgress?: InputMaybe<Progress_Order_By>;
  bestProgressVersion?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  count?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  lastProgress?: InputMaybe<Progress_Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  succeeded?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "progress_by_path_view" */
export enum Progress_By_Path_View_Select_Column {
  /** column name */
  BestProgressVersion = 'bestProgressVersion',
  /** column name */
  Campus = 'campus',
  /** column name */
  Count = 'count',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  LastProgressId = 'lastProgressId',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  Path = 'path',
  /** column name */
  Succeeded = 'succeeded',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** select "progress_by_path_view_aggregate_bool_exp_bool_and_arguments_columns" columns of table "progress_by_path_view" */
export enum Progress_By_Path_View_Select_Column_Progress_By_Path_View_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Succeeded = 'succeeded'
}

/** select "progress_by_path_view_aggregate_bool_exp_bool_or_arguments_columns" columns of table "progress_by_path_view" */
export enum Progress_By_Path_View_Select_Column_Progress_By_Path_View_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Succeeded = 'succeeded'
}

/** aggregate stddev on columns */
export type Progress_By_Path_View_Stddev_Fields = {
  __typename?: 'progress_by_path_view_stddev_fields';
  count?: Maybe<Scalars['Float']['output']>;
  lastProgressId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Stddev_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Progress_By_Path_View_Stddev_Pop_Fields = {
  __typename?: 'progress_by_path_view_stddev_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  lastProgressId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Stddev_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Progress_By_Path_View_Stddev_Samp_Fields = {
  __typename?: 'progress_by_path_view_stddev_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  lastProgressId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Stddev_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "progress_by_path_view" */
export type Progress_By_Path_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Progress_By_Path_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Progress_By_Path_View_Stream_Cursor_Value_Input = {
  bestProgressVersion?: InputMaybe<Scalars['String']['input']>;
  campus?: InputMaybe<Scalars['String']['input']>;
  count?: InputMaybe<Scalars['bigint']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  lastProgressId?: InputMaybe<Scalars['bigint']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Progress_By_Path_View_Sum_Fields = {
  __typename?: 'progress_by_path_view_sum_fields';
  count?: Maybe<Scalars['bigint']['output']>;
  lastProgressId?: Maybe<Scalars['bigint']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Sum_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Progress_By_Path_View_Var_Pop_Fields = {
  __typename?: 'progress_by_path_view_var_pop_fields';
  count?: Maybe<Scalars['Float']['output']>;
  lastProgressId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Var_Pop_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Progress_By_Path_View_Var_Samp_Fields = {
  __typename?: 'progress_by_path_view_var_samp_fields';
  count?: Maybe<Scalars['Float']['output']>;
  lastProgressId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Var_Samp_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Progress_By_Path_View_Variance_Fields = {
  __typename?: 'progress_by_path_view_variance_fields';
  count?: Maybe<Scalars['Float']['output']>;
  lastProgressId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "progress_by_path_view" */
export type Progress_By_Path_View_Variance_Order_By = {
  count?: InputMaybe<Order_By>;
  lastProgressId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Progress_Max_Fields = {
  __typename?: 'progress_max_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "progress" */
export type Progress_Max_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Progress_Min_Fields = {
  __typename?: 'progress_min_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "progress" */
export type Progress_Min_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "progress". */
export type Progress_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  group?: InputMaybe<Group_Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isDone?: InputMaybe<Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  results_aggregate?: InputMaybe<Result_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** select columns of table "progress" */
export enum Progress_Select_Column {
  /** column name */
  Campus = 'campus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Grade = 'grade',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  IsDone = 'isDone',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  Path = 'path',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Version = 'version'
}

/** select "progress_aggregate_bool_exp_bool_and_arguments_columns" columns of table "progress" */
export enum Progress_Select_Column_Progress_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsDone = 'isDone'
}

/** select "progress_aggregate_bool_exp_bool_or_arguments_columns" columns of table "progress" */
export enum Progress_Select_Column_Progress_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsDone = 'isDone'
}

/** aggregate stddev on columns */
export type Progress_Stddev_Fields = {
  __typename?: 'progress_stddev_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "progress" */
export type Progress_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Progress_Stddev_Pop_Fields = {
  __typename?: 'progress_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "progress" */
export type Progress_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Progress_Stddev_Samp_Fields = {
  __typename?: 'progress_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "progress" */
export type Progress_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "progress" */
export type Progress_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Progress_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Progress_Stream_Cursor_Value_Input = {
  campus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  grade?: InputMaybe<Scalars['numeric']['input']>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  isDone?: InputMaybe<Scalars['Boolean']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Progress_Sum_Fields = {
  __typename?: 'progress_sum_fields';
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "progress" */
export type Progress_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Progress_Var_Pop_Fields = {
  __typename?: 'progress_var_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "progress" */
export type Progress_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Progress_Var_Samp_Fields = {
  __typename?: 'progress_var_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "progress" */
export type Progress_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Progress_Variance_Fields = {
  __typename?: 'progress_variance_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "progress" */
export type Progress_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "audit" */
  audit: Array<Audit>;
  /** fetch aggregated fields from the table: "audit" */
  audit_aggregate: Audit_Aggregate;
  /** fetch data from the table: "audit" using primary key columns */
  audit_by_pk?: Maybe<Audit>;
  /** fetch data from the table: "audit_private" */
  audit_private: Array<Audit_Private>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "event_user" */
  event_user: Array<Event_User>;
  /** fetch aggregated fields from the table: "event_user" */
  event_user_aggregate: Event_User_Aggregate;
  /** fetch data from the table: "event_user" using primary key columns */
  event_user_by_pk?: Maybe<Event_User>;
  /** fetch data from the table: "event_user_view" */
  event_user_view: Array<Event_User_View>;
  /** fetch aggregated fields from the table: "event_user_view" */
  event_user_view_aggregate: Event_User_View_Aggregate;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table: "group_user" */
  group_user: Array<Group_User>;
  /** fetch aggregated fields from the table: "group_user" */
  group_user_aggregate: Group_User_Aggregate;
  /** fetch data from the table: "group_user" using primary key columns */
  group_user_by_pk?: Maybe<Group_User>;
  /** fetch data from the table: "label" */
  label: Array<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: Label_Aggregate;
  /** fetch data from the table: "label" using primary key columns */
  label_by_pk?: Maybe<Label>;
  /** fetch data from the table: "label_user" */
  label_user: Array<Label_User>;
  /** fetch aggregated fields from the table: "label_user" */
  label_user_aggregate: Label_User_Aggregate;
  /** fetch data from the table: "label_user" using primary key columns */
  label_user_by_pk?: Maybe<Label_User>;
  /** fetch data from the table: "markdown" */
  markdown: Array<Markdown>;
  /** fetch data from the table: "markdown" using primary key columns */
  markdown_by_pk?: Maybe<Markdown>;
  /** fetch data from the table: "match" */
  match: Array<Match>;
  /** fetch aggregated fields from the table: "match" */
  match_aggregate: Match_Aggregate;
  /** fetch data from the table: "match" using primary key columns */
  match_by_pk?: Maybe<Match>;
  /** fetch data from the table: "object" */
  object: Array<Object>;
  /** fetch aggregated fields from the table: "object" */
  object_aggregate: Object_Aggregate;
  /** fetch data from the table: "object_availability" */
  object_availability: Array<Object_Availability>;
  /** fetch aggregated fields from the table: "object_availability" */
  object_availability_aggregate: Object_Availability_Aggregate;
  /** fetch data from the table: "object_availability" using primary key columns */
  object_availability_by_pk?: Maybe<Object_Availability>;
  /** fetch data from the table: "object" using primary key columns */
  object_by_pk?: Maybe<Object>;
  /** fetch data from the table: "object_child" */
  object_child: Array<Object_Child>;
  /** fetch aggregated fields from the table: "object_child" */
  object_child_aggregate: Object_Child_Aggregate;
  /** fetch data from the table: "object_child" using primary key columns */
  object_child_by_pk?: Maybe<Object_Child>;
  /** fetch data from the table: "object_type" */
  object_type: Array<Object_Type>;
  /** fetch aggregated fields from the table: "object_type" */
  object_type_aggregate: Object_Type_Aggregate;
  /** fetch data from the table: "object_type" using primary key columns */
  object_type_by_pk?: Maybe<Object_Type>;
  /** fetch data from the table: "path" */
  path: Array<Path>;
  /** fetch aggregated fields from the table: "path" */
  path_aggregate: Path_Aggregate;
  /** fetch data from the table: "path_archive" */
  path_archive: Array<Path_Archive>;
  /** fetch aggregated fields from the table: "path_archive" */
  path_archive_aggregate: Path_Archive_Aggregate;
  /** fetch data from the table: "path_archive" using primary key columns */
  path_archive_by_pk?: Maybe<Path_Archive>;
  /** fetch data from the table: "path" using primary key columns */
  path_by_pk?: Maybe<Path>;
  /** fetch data from the table: "progress" */
  progress: Array<Progress>;
  /** fetch aggregated fields from the table: "progress" */
  progress_aggregate: Progress_Aggregate;
  /** fetch data from the table: "progress_by_path_view" */
  progress_by_path_view: Array<Progress_By_Path_View>;
  /** fetch aggregated fields from the table: "progress_by_path_view" */
  progress_by_path_view_aggregate: Progress_By_Path_View_Aggregate;
  /** fetch data from the table: "progress" using primary key columns */
  progress_by_pk?: Maybe<Progress>;
  /** fetch data from the table: "record" */
  record: Array<Record>;
  /** fetch data from the table: "record" using primary key columns */
  record_by_pk?: Maybe<Record>;
  /** fetch data from the table: "record_public_view" */
  record_public_view: Array<Record_Public_View>;
  /** fetch aggregated fields from the table: "record_public_view" */
  record_public_view_aggregate: Record_Public_View_Aggregate;
  /** fetch data from the table: "record_type" */
  record_type: Array<Record_Type>;
  /** fetch data from the table: "record_type" using primary key columns */
  record_type_by_pk?: Maybe<Record_Type>;
  /** fetch data from the table: "registration" */
  registration: Array<Registration>;
  /** fetch aggregated fields from the table: "registration" */
  registration_aggregate: Registration_Aggregate;
  /** fetch data from the table: "registration" using primary key columns */
  registration_by_pk?: Maybe<Registration>;
  /** fetch data from the table: "registration_user" */
  registration_user: Array<Registration_User>;
  /** fetch aggregated fields from the table: "registration_user" */
  registration_user_aggregate: Registration_User_Aggregate;
  /** fetch data from the table: "registration_user" using primary key columns */
  registration_user_by_pk?: Maybe<Registration_User>;
  /** fetch data from the table: "registration_user_view" */
  registration_user_view: Array<Registration_User_View>;
  /** fetch aggregated fields from the table: "registration_user_view" */
  registration_user_view_aggregate: Registration_User_View_Aggregate;
  /** fetch data from the table: "result" */
  result: Array<Result>;
  /** fetch aggregated fields from the table: "result" */
  result_aggregate: Result_Aggregate;
  /** fetch data from the table: "result" using primary key columns */
  result_by_pk?: Maybe<Result>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table: "timing" */
  timing: Array<Timing>;
  /** execute function "timings" which returns "timing" */
  timings?: Maybe<Timing>;
  /** fetch data from the table: "toad.campaign_games" */
  toad_campaign_games: Array<Toad_Campaign_Games>;
  /** fetch aggregated fields from the table: "toad.campaign_games" */
  toad_campaign_games_aggregate: Toad_Campaign_Games_Aggregate;
  /** fetch data from the table: "toad.campaign_games" using primary key columns */
  toad_campaign_games_by_pk?: Maybe<Toad_Campaign_Games>;
  /** fetch data from the table: "toad.campaigns" */
  toad_campaigns: Array<Toad_Campaigns>;
  /** fetch data from the table: "toad.campaigns" using primary key columns */
  toad_campaigns_by_pk?: Maybe<Toad_Campaigns>;
  /** fetch data from the table: "toad.games" */
  toad_games: Array<Toad_Games>;
  /** fetch aggregated fields from the table: "toad.games" */
  toad_games_aggregate: Toad_Games_Aggregate;
  /** fetch data from the table: "toad.games" using primary key columns */
  toad_games_by_pk?: Maybe<Toad_Games>;
  /** fetch data from the table: "toad.session_game_results" */
  toad_session_game_results: Array<Toad_Session_Game_Results>;
  /** fetch data from the table: "toad.session_game_results" using primary key columns */
  toad_session_game_results_by_pk?: Maybe<Toad_Session_Game_Results>;
  /** fetch data from the table: "toad.session_games" */
  toad_session_games: Array<Toad_Session_Games>;
  /** fetch aggregated fields from the table: "toad.session_games" */
  toad_session_games_aggregate: Toad_Session_Games_Aggregate;
  /** fetch data from the table: "toad.session_games" using primary key columns */
  toad_session_games_by_pk?: Maybe<Toad_Session_Games>;
  /** fetch data from the table: "toad.sessions" */
  toad_sessions: Array<Toad_Sessions>;
  /** fetch aggregated fields from the table: "toad.sessions" */
  toad_sessions_aggregate: Toad_Sessions_Aggregate;
  /** fetch data from the table: "toad.sessions" using primary key columns */
  toad_sessions_by_pk?: Maybe<Toad_Sessions>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "transaction_type" */
  transaction_type: Array<Transaction_Type>;
  /** fetch aggregated fields from the table: "transaction_type" */
  transaction_type_aggregate: Transaction_Type_Aggregate;
  /** fetch data from the table: "transaction_type" using primary key columns */
  transaction_type_by_pk?: Maybe<Transaction_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_public_view" */
  user_public_view: Array<User_Public_View>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table: "user_roles_view" */
  user_roles_view: Array<User_Roles_View>;
  /** fetch aggregated fields from the table: "user_roles_view" */
  user_roles_view_aggregate: User_Roles_View_Aggregate;
  /** fetch data from the table: "xp_view" */
  xp_view: Array<Xp_View>;
};


export type Query_RootAuditArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


export type Query_RootAudit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


export type Query_RootAudit_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootAudit_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Private_Order_By>>;
  where?: InputMaybe<Audit_Private_Bool_Exp>;
};


export type Query_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Query_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Query_RootEvent_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEvent_UserArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


export type Query_RootEvent_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


export type Query_RootEvent_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootEvent_User_ViewArgs = {
  distinct_on?: InputMaybe<Array<Event_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_View_Order_By>>;
  where?: InputMaybe<Event_User_View_Bool_Exp>;
};


export type Query_RootEvent_User_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_View_Order_By>>;
  where?: InputMaybe<Event_User_View_Bool_Exp>;
};


export type Query_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootGroup_UserArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


export type Query_RootGroup_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


export type Query_RootGroup_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootLabelArgs = {
  distinct_on?: InputMaybe<Array<Label_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_Order_By>>;
  where?: InputMaybe<Label_Bool_Exp>;
};


export type Query_RootLabel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_Order_By>>;
  where?: InputMaybe<Label_Bool_Exp>;
};


export type Query_RootLabel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootLabel_UserArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


export type Query_RootLabel_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


export type Query_RootLabel_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootMarkdownArgs = {
  distinct_on?: InputMaybe<Array<Markdown_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Markdown_Order_By>>;
  where?: InputMaybe<Markdown_Bool_Exp>;
};


export type Query_RootMarkdown_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Query_RootMatchArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Query_RootMatch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Query_RootMatch_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootObjectArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


export type Query_RootObject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


export type Query_RootObject_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


export type Query_RootObject_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


export type Query_RootObject_Availability_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootObject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootObject_ChildArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


export type Query_RootObject_Child_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


export type Query_RootObject_Child_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootObject_TypeArgs = {
  distinct_on?: InputMaybe<Array<Object_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Type_Order_By>>;
  where?: InputMaybe<Object_Type_Bool_Exp>;
};


export type Query_RootObject_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Type_Order_By>>;
  where?: InputMaybe<Object_Type_Bool_Exp>;
};


export type Query_RootObject_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_RootPathArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


export type Query_RootPath_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


export type Query_RootPath_ArchiveArgs = {
  distinct_on?: InputMaybe<Array<Path_Archive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Archive_Order_By>>;
  where?: InputMaybe<Path_Archive_Bool_Exp>;
};


export type Query_RootPath_Archive_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Path_Archive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Archive_Order_By>>;
  where?: InputMaybe<Path_Archive_Bool_Exp>;
};


export type Query_RootPath_Archive_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootPath_By_PkArgs = {
  path: Scalars['String']['input'];
};


export type Query_RootProgressArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


export type Query_RootProgress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


export type Query_RootProgress_By_Path_ViewArgs = {
  distinct_on?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_By_Path_View_Order_By>>;
  where?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
};


export type Query_RootProgress_By_Path_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_By_Path_View_Order_By>>;
  where?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
};


export type Query_RootProgress_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootRecordArgs = {
  distinct_on?: InputMaybe<Array<Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Order_By>>;
  where?: InputMaybe<Record_Bool_Exp>;
};


export type Query_RootRecord_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRecord_Public_ViewArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


export type Query_RootRecord_Public_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


export type Query_RootRecord_TypeArgs = {
  distinct_on?: InputMaybe<Array<Record_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Type_Order_By>>;
  where?: InputMaybe<Record_Type_Bool_Exp>;
};


export type Query_RootRecord_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_RootRegistrationArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


export type Query_RootRegistration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


export type Query_RootRegistration_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRegistration_UserArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


export type Query_RootRegistration_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


export type Query_RootRegistration_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRegistration_User_ViewArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_View_Order_By>>;
  where?: InputMaybe<Registration_User_View_Bool_Exp>;
};


export type Query_RootRegistration_User_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_View_Order_By>>;
  where?: InputMaybe<Registration_User_View_Bool_Exp>;
};


export type Query_RootResultArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Query_RootResult_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Query_RootResult_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Query_RootRole_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Query_RootTask_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTimingArgs = {
  distinct_on?: InputMaybe<Array<Timing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Timing_Order_By>>;
  where?: InputMaybe<Timing_Bool_Exp>;
};


export type Query_RootTimingsArgs = {
  args: Timings_Args;
  distinct_on?: InputMaybe<Array<Timing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Timing_Order_By>>;
  where?: InputMaybe<Timing_Bool_Exp>;
};


export type Query_RootToad_Campaign_GamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


export type Query_RootToad_Campaign_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


export type Query_RootToad_Campaign_Games_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootToad_CampaignsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaigns_Order_By>>;
  where?: InputMaybe<Toad_Campaigns_Bool_Exp>;
};


export type Query_RootToad_Campaigns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootToad_GamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Games_Order_By>>;
  where?: InputMaybe<Toad_Games_Bool_Exp>;
};


export type Query_RootToad_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Games_Order_By>>;
  where?: InputMaybe<Toad_Games_Bool_Exp>;
};


export type Query_RootToad_Games_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootToad_Session_Game_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Game_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Game_Results_Order_By>>;
  where?: InputMaybe<Toad_Session_Game_Results_Bool_Exp>;
};


export type Query_RootToad_Session_Game_Results_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootToad_Session_GamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Games_Order_By>>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};


export type Query_RootToad_Session_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Games_Order_By>>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};


export type Query_RootToad_Session_Games_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootToad_SessionsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


export type Query_RootToad_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


export type Query_RootToad_Sessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTransaction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Type_Order_By>>;
  where?: InputMaybe<Transaction_Type_Bool_Exp>;
};


export type Query_RootTransaction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Type_Order_By>>;
  where?: InputMaybe<Transaction_Type_Bool_Exp>;
};


export type Query_RootTransaction_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_Public_ViewArgs = {
  distinct_on?: InputMaybe<Array<User_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Public_View_Order_By>>;
  where?: InputMaybe<User_Public_View_Bool_Exp>;
};


export type Query_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Query_RootUser_Role_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_Roles_ViewArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


export type Query_RootUser_Roles_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


export type Query_RootXp_ViewArgs = {
  distinct_on?: InputMaybe<Array<Xp_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Xp_View_Order_By>>;
  where?: InputMaybe<Xp_View_Bool_Exp>;
};

/** columns and relationships of "record" */
export type Record = {
  __typename?: 'record';
  /** An object relationship */
  author: User;
  authorId: Scalars['Int']['output'];
  authorLogin?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  startAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  type: Record_Type;
  typeName: Scalars['String']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int']['output'];
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by aggregate values of table "record" */
export type Record_Aggregate_Order_By = {
  avg?: InputMaybe<Record_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Record_Max_Order_By>;
  min?: InputMaybe<Record_Min_Order_By>;
  stddev?: InputMaybe<Record_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Record_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Record_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Record_Sum_Order_By>;
  var_pop?: InputMaybe<Record_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Record_Var_Samp_Order_By>;
  variance?: InputMaybe<Record_Variance_Order_By>;
};

/** order by avg() on columns of table "record" */
export type Record_Avg_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "record". All fields are combined with a logical 'AND'. */
export type Record_Bool_Exp = {
  _and?: InputMaybe<Array<Record_Bool_Exp>>;
  _not?: InputMaybe<Record_Bool_Exp>;
  _or?: InputMaybe<Array<Record_Bool_Exp>>;
  author?: InputMaybe<User_Bool_Exp>;
  authorId?: InputMaybe<Int_Comparison_Exp>;
  authorLogin?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  endAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  startAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<Record_Type_Bool_Exp>;
  typeName?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
};

/** order by max() on columns of table "record" */
export type Record_Max_Order_By = {
  authorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
  typeName?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "record" */
export type Record_Min_Order_By = {
  authorId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
  typeName?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "record". */
export type Record_Order_By = {
  author?: InputMaybe<User_Order_By>;
  authorId?: InputMaybe<Order_By>;
  authorLogin?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
  type?: InputMaybe<Record_Type_Order_By>;
  typeName?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
};

/** columns and relationships of "record_public_view" */
export type Record_Public_View = {
  __typename?: 'record_public_view';
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  startAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "record_public_view" */
export type Record_Public_View_Aggregate = {
  __typename?: 'record_public_view_aggregate';
  aggregate?: Maybe<Record_Public_View_Aggregate_Fields>;
  nodes: Array<Record_Public_View>;
};

export type Record_Public_View_Aggregate_Bool_Exp = {
  count?: InputMaybe<Record_Public_View_Aggregate_Bool_Exp_Count>;
};

export type Record_Public_View_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Record_Public_View_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "record_public_view" */
export type Record_Public_View_Aggregate_Fields = {
  __typename?: 'record_public_view_aggregate_fields';
  avg?: Maybe<Record_Public_View_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Record_Public_View_Max_Fields>;
  min?: Maybe<Record_Public_View_Min_Fields>;
  stddev?: Maybe<Record_Public_View_Stddev_Fields>;
  stddev_pop?: Maybe<Record_Public_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Record_Public_View_Stddev_Samp_Fields>;
  sum?: Maybe<Record_Public_View_Sum_Fields>;
  var_pop?: Maybe<Record_Public_View_Var_Pop_Fields>;
  var_samp?: Maybe<Record_Public_View_Var_Samp_Fields>;
  variance?: Maybe<Record_Public_View_Variance_Fields>;
};


/** aggregate fields of "record_public_view" */
export type Record_Public_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "record_public_view" */
export type Record_Public_View_Aggregate_Order_By = {
  avg?: InputMaybe<Record_Public_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Record_Public_View_Max_Order_By>;
  min?: InputMaybe<Record_Public_View_Min_Order_By>;
  stddev?: InputMaybe<Record_Public_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Record_Public_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Record_Public_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Record_Public_View_Sum_Order_By>;
  var_pop?: InputMaybe<Record_Public_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Record_Public_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Record_Public_View_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Record_Public_View_Avg_Fields = {
  __typename?: 'record_public_view_avg_fields';
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "record_public_view" */
export type Record_Public_View_Avg_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "record_public_view". All fields are combined with a logical 'AND'. */
export type Record_Public_View_Bool_Exp = {
  _and?: InputMaybe<Array<Record_Public_View_Bool_Exp>>;
  _not?: InputMaybe<Record_Public_View_Bool_Exp>;
  _or?: InputMaybe<Array<Record_Public_View_Bool_Exp>>;
  endAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  startAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Record_Public_View_Max_Fields = {
  __typename?: 'record_public_view_max_fields';
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  startAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "record_public_view" */
export type Record_Public_View_Max_Order_By = {
  endAt?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Record_Public_View_Min_Fields = {
  __typename?: 'record_public_view_min_fields';
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  startAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "record_public_view" */
export type Record_Public_View_Min_Order_By = {
  endAt?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "record_public_view". */
export type Record_Public_View_Order_By = {
  endAt?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "record_public_view" */
export enum Record_Public_View_Select_Column {
  /** column name */
  EndAt = 'endAt',
  /** column name */
  StartAt = 'startAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Record_Public_View_Stddev_Fields = {
  __typename?: 'record_public_view_stddev_fields';
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "record_public_view" */
export type Record_Public_View_Stddev_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Record_Public_View_Stddev_Pop_Fields = {
  __typename?: 'record_public_view_stddev_pop_fields';
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "record_public_view" */
export type Record_Public_View_Stddev_Pop_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Record_Public_View_Stddev_Samp_Fields = {
  __typename?: 'record_public_view_stddev_samp_fields';
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "record_public_view" */
export type Record_Public_View_Stddev_Samp_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "record_public_view" */
export type Record_Public_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Record_Public_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Record_Public_View_Stream_Cursor_Value_Input = {
  endAt?: InputMaybe<Scalars['timestamptz']['input']>;
  startAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Record_Public_View_Sum_Fields = {
  __typename?: 'record_public_view_sum_fields';
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "record_public_view" */
export type Record_Public_View_Sum_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Record_Public_View_Var_Pop_Fields = {
  __typename?: 'record_public_view_var_pop_fields';
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "record_public_view" */
export type Record_Public_View_Var_Pop_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Record_Public_View_Var_Samp_Fields = {
  __typename?: 'record_public_view_var_samp_fields';
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "record_public_view" */
export type Record_Public_View_Var_Samp_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Record_Public_View_Variance_Fields = {
  __typename?: 'record_public_view_variance_fields';
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "record_public_view" */
export type Record_Public_View_Variance_Order_By = {
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "record" */
export enum Record_Select_Column {
  /** column name */
  AuthorId = 'authorId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  Id = 'id',
  /** column name */
  Message = 'message',
  /** column name */
  StartAt = 'startAt',
  /** column name */
  TypeName = 'typeName',
  /** column name */
  UserId = 'userId'
}

/** order by stddev() on columns of table "record" */
export type Record_Stddev_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "record" */
export type Record_Stddev_Pop_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "record" */
export type Record_Stddev_Samp_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "record" */
export type Record_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Record_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Record_Stream_Cursor_Value_Input = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  endAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['timestamptz']['input']>;
  typeName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "record" */
export type Record_Sum_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "record_type" */
export type Record_Type = {
  __typename?: 'record_type';
  canAccessPlatform: Scalars['Boolean']['output'];
  canBeAuditor: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  isPermanent: Scalars['Boolean']['output'];
  label: Scalars['String']['output'];
  /** An array relationship */
  records: Array<Record>;
  type: Scalars['String']['output'];
};


/** columns and relationships of "record_type" */
export type Record_TypeRecordsArgs = {
  distinct_on?: InputMaybe<Array<Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Order_By>>;
  where?: InputMaybe<Record_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "record_type". All fields are combined with a logical 'AND'. */
export type Record_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Record_Type_Bool_Exp>>;
  _not?: InputMaybe<Record_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Record_Type_Bool_Exp>>;
  canAccessPlatform?: InputMaybe<Boolean_Comparison_Exp>;
  canBeAuditor?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  isPermanent?: InputMaybe<Boolean_Comparison_Exp>;
  label?: InputMaybe<String_Comparison_Exp>;
  records?: InputMaybe<Record_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** Ordering options when selecting data from "record_type". */
export type Record_Type_Order_By = {
  canAccessPlatform?: InputMaybe<Order_By>;
  canBeAuditor?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  isPermanent?: InputMaybe<Order_By>;
  label?: InputMaybe<Order_By>;
  records_aggregate?: InputMaybe<Record_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "record_type" */
export enum Record_Type_Select_Column {
  /** column name */
  CanAccessPlatform = 'canAccessPlatform',
  /** column name */
  CanBeAuditor = 'canBeAuditor',
  /** column name */
  Description = 'description',
  /** column name */
  IsPermanent = 'isPermanent',
  /** column name */
  Label = 'label',
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "record_type" */
export type Record_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Record_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Record_Type_Stream_Cursor_Value_Input = {
  canAccessPlatform?: InputMaybe<Scalars['Boolean']['input']>;
  canBeAuditor?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  isPermanent?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** order by var_pop() on columns of table "record" */
export type Record_Var_Pop_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "record" */
export type Record_Var_Samp_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "record" */
export type Record_Variance_Order_By = {
  authorId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "registration" */
export type Registration = {
  __typename?: 'registration';
  campus?: Maybe<Scalars['String']['output']>;
  capacity: Scalars['Int']['output'];
  createdAt: Scalars['timestamptz']['output'];
  endAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event: Event;
  eventId: Scalars['Int']['output'];
  eventJoinedAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  label?: Maybe<Label>;
  labelId?: Maybe<Scalars['Int']['output']>;
  labelName?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  object: Object;
  objectId: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  /** An array relationship */
  registrationUsers: Array<Registration_User>;
  /** An aggregate relationship */
  registrationUsers_aggregate: Registration_User_Aggregate;
  startAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  users: Array<Registration_User_View>;
  /** An aggregate relationship */
  users_aggregate: Registration_User_View_Aggregate;
};


/** columns and relationships of "registration" */
export type RegistrationRegistrationUsersArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


/** columns and relationships of "registration" */
export type RegistrationRegistrationUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


/** columns and relationships of "registration" */
export type RegistrationUsersArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_View_Order_By>>;
  where?: InputMaybe<Registration_User_View_Bool_Exp>;
};


/** columns and relationships of "registration" */
export type RegistrationUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_View_Order_By>>;
  where?: InputMaybe<Registration_User_View_Bool_Exp>;
};

/** aggregated selection of "registration" */
export type Registration_Aggregate = {
  __typename?: 'registration_aggregate';
  aggregate?: Maybe<Registration_Aggregate_Fields>;
  nodes: Array<Registration>;
};

export type Registration_Aggregate_Bool_Exp = {
  count?: InputMaybe<Registration_Aggregate_Bool_Exp_Count>;
};

export type Registration_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Registration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Registration_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "registration" */
export type Registration_Aggregate_Fields = {
  __typename?: 'registration_aggregate_fields';
  avg?: Maybe<Registration_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Registration_Max_Fields>;
  min?: Maybe<Registration_Min_Fields>;
  stddev?: Maybe<Registration_Stddev_Fields>;
  stddev_pop?: Maybe<Registration_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Registration_Stddev_Samp_Fields>;
  sum?: Maybe<Registration_Sum_Fields>;
  var_pop?: Maybe<Registration_Var_Pop_Fields>;
  var_samp?: Maybe<Registration_Var_Samp_Fields>;
  variance?: Maybe<Registration_Variance_Fields>;
};


/** aggregate fields of "registration" */
export type Registration_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Registration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "registration" */
export type Registration_Aggregate_Order_By = {
  avg?: InputMaybe<Registration_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Registration_Max_Order_By>;
  min?: InputMaybe<Registration_Min_Order_By>;
  stddev?: InputMaybe<Registration_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Registration_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Registration_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Registration_Sum_Order_By>;
  var_pop?: InputMaybe<Registration_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Registration_Var_Samp_Order_By>;
  variance?: InputMaybe<Registration_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Registration_Avg_Fields = {
  __typename?: 'registration_avg_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "registration" */
export type Registration_Avg_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "registration". All fields are combined with a logical 'AND'. */
export type Registration_Bool_Exp = {
  _and?: InputMaybe<Array<Registration_Bool_Exp>>;
  _not?: InputMaybe<Registration_Bool_Exp>;
  _or?: InputMaybe<Array<Registration_Bool_Exp>>;
  campus?: InputMaybe<String_Comparison_Exp>;
  capacity?: InputMaybe<Int_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  endAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  eventJoinedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  label?: InputMaybe<Label_Bool_Exp>;
  labelId?: InputMaybe<Int_Comparison_Exp>;
  labelName?: InputMaybe<String_Comparison_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  registrationUsers?: InputMaybe<Registration_User_Bool_Exp>;
  registrationUsers_aggregate?: InputMaybe<Registration_User_Aggregate_Bool_Exp>;
  startAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  users?: InputMaybe<Registration_User_View_Bool_Exp>;
  users_aggregate?: InputMaybe<Registration_User_View_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Registration_Max_Fields = {
  __typename?: 'registration_max_fields';
  campus?: Maybe<Scalars['String']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  eventJoinedAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  labelId?: Maybe<Scalars['Int']['output']>;
  labelName?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  startAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "registration" */
export type Registration_Max_Order_By = {
  campus?: InputMaybe<Order_By>;
  capacity?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  eventJoinedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Registration_Min_Fields = {
  __typename?: 'registration_min_fields';
  campus?: Maybe<Scalars['String']['output']>;
  capacity?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  endAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  eventJoinedAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  labelId?: Maybe<Scalars['Int']['output']>;
  labelName?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  startAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "registration" */
export type Registration_Min_Order_By = {
  campus?: InputMaybe<Order_By>;
  capacity?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  eventJoinedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  startAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "registration". */
export type Registration_Order_By = {
  campus?: InputMaybe<Order_By>;
  capacity?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  endAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  eventJoinedAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  label?: InputMaybe<Label_Order_By>;
  labelId?: InputMaybe<Order_By>;
  labelName?: InputMaybe<Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  registrationUsers_aggregate?: InputMaybe<Registration_User_Aggregate_Order_By>;
  startAt?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Registration_User_View_Aggregate_Order_By>;
};

/** select columns of table "registration" */
export enum Registration_Select_Column {
  /** column name */
  Campus = 'campus',
  /** column name */
  Capacity = 'capacity',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndAt = 'endAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  EventJoinedAt = 'eventJoinedAt',
  /** column name */
  Id = 'id',
  /** column name */
  LabelId = 'labelId',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  Path = 'path',
  /** column name */
  StartAt = 'startAt'
}

/** aggregate stddev on columns */
export type Registration_Stddev_Fields = {
  __typename?: 'registration_stddev_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "registration" */
export type Registration_Stddev_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Registration_Stddev_Pop_Fields = {
  __typename?: 'registration_stddev_pop_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "registration" */
export type Registration_Stddev_Pop_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Registration_Stddev_Samp_Fields = {
  __typename?: 'registration_stddev_samp_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "registration" */
export type Registration_Stddev_Samp_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "registration" */
export type Registration_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Registration_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Registration_Stream_Cursor_Value_Input = {
  campus?: InputMaybe<Scalars['String']['input']>;
  capacity?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  endAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  eventJoinedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  labelId?: InputMaybe<Scalars['Int']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Registration_Sum_Fields = {
  __typename?: 'registration_sum_fields';
  capacity?: Maybe<Scalars['Int']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  labelId?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "registration" */
export type Registration_Sum_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** columns and relationships of "registration_user" */
export type Registration_User = {
  __typename?: 'registration_user';
  createdAt: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  registration: Registration;
  registrationId: Scalars['Int']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int']['output'];
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "registration_user" */
export type Registration_User_Aggregate = {
  __typename?: 'registration_user_aggregate';
  aggregate?: Maybe<Registration_User_Aggregate_Fields>;
  nodes: Array<Registration_User>;
};

export type Registration_User_Aggregate_Bool_Exp = {
  count?: InputMaybe<Registration_User_Aggregate_Bool_Exp_Count>;
};

export type Registration_User_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Registration_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Registration_User_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "registration_user" */
export type Registration_User_Aggregate_Fields = {
  __typename?: 'registration_user_aggregate_fields';
  avg?: Maybe<Registration_User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Registration_User_Max_Fields>;
  min?: Maybe<Registration_User_Min_Fields>;
  stddev?: Maybe<Registration_User_Stddev_Fields>;
  stddev_pop?: Maybe<Registration_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Registration_User_Stddev_Samp_Fields>;
  sum?: Maybe<Registration_User_Sum_Fields>;
  var_pop?: Maybe<Registration_User_Var_Pop_Fields>;
  var_samp?: Maybe<Registration_User_Var_Samp_Fields>;
  variance?: Maybe<Registration_User_Variance_Fields>;
};


/** aggregate fields of "registration_user" */
export type Registration_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Registration_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "registration_user" */
export type Registration_User_Aggregate_Order_By = {
  avg?: InputMaybe<Registration_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Registration_User_Max_Order_By>;
  min?: InputMaybe<Registration_User_Min_Order_By>;
  stddev?: InputMaybe<Registration_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Registration_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Registration_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Registration_User_Sum_Order_By>;
  var_pop?: InputMaybe<Registration_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Registration_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Registration_User_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Registration_User_Avg_Fields = {
  __typename?: 'registration_user_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "registration_user" */
export type Registration_User_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "registration_user". All fields are combined with a logical 'AND'. */
export type Registration_User_Bool_Exp = {
  _and?: InputMaybe<Array<Registration_User_Bool_Exp>>;
  _not?: InputMaybe<Registration_User_Bool_Exp>;
  _or?: InputMaybe<Array<Registration_User_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  registration?: InputMaybe<Registration_Bool_Exp>;
  registrationId?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "registration_user" */
export enum Registration_User_Constraint {
  /** unique or primary key constraint on columns "id" */
  RegistrationUserPkey = 'registration_user_pkey',
  /** unique or primary key constraint on columns "userId", "registrationId" */
  RegistrationUserUserIdRegistrationIdKey = 'registration_user_userId_registrationId_key'
}

/** input type for inserting data into table "registration_user" */
export type Registration_User_Insert_Input = {
  registrationId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Registration_User_Max_Fields = {
  __typename?: 'registration_user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  registrationId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "registration_user" */
export type Registration_User_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Registration_User_Min_Fields = {
  __typename?: 'registration_user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  registrationId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "registration_user" */
export type Registration_User_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "registration_user" */
export type Registration_User_Mutation_Response = {
  __typename?: 'registration_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Registration_User>;
};

/** on_conflict condition type for table "registration_user" */
export type Registration_User_On_Conflict = {
  constraint: Registration_User_Constraint;
  update_columns?: Array<Registration_User_Update_Column>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};

/** Ordering options when selecting data from "registration_user". */
export type Registration_User_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  registration?: InputMaybe<Registration_Order_By>;
  registrationId?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
};

/** select columns of table "registration_user" */
export enum Registration_User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  RegistrationId = 'registrationId',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type Registration_User_Stddev_Fields = {
  __typename?: 'registration_user_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "registration_user" */
export type Registration_User_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Registration_User_Stddev_Pop_Fields = {
  __typename?: 'registration_user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "registration_user" */
export type Registration_User_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Registration_User_Stddev_Samp_Fields = {
  __typename?: 'registration_user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "registration_user" */
export type Registration_User_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "registration_user" */
export type Registration_User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Registration_User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Registration_User_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  registrationId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Registration_User_Sum_Fields = {
  __typename?: 'registration_user_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  registrationId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "registration_user" */
export type Registration_User_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** placeholder for update columns of table "registration_user" (current role has no relevant permissions) */
export enum Registration_User_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

/** aggregate var_pop on columns */
export type Registration_User_Var_Pop_Fields = {
  __typename?: 'registration_user_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "registration_user" */
export type Registration_User_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Registration_User_Var_Samp_Fields = {
  __typename?: 'registration_user_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "registration_user" */
export type Registration_User_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Registration_User_Variance_Fields = {
  __typename?: 'registration_user_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "registration_user" */
export type Registration_User_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "registration_user_view" */
export type Registration_User_View = {
  __typename?: 'registration_user_view';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['bigint']['output']>;
  registeredAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  registration?: Maybe<Registration>;
  registrationId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "registration_user_view" */
export type Registration_User_View_Aggregate = {
  __typename?: 'registration_user_view_aggregate';
  aggregate?: Maybe<Registration_User_View_Aggregate_Fields>;
  nodes: Array<Registration_User_View>;
};

export type Registration_User_View_Aggregate_Bool_Exp = {
  count?: InputMaybe<Registration_User_View_Aggregate_Bool_Exp_Count>;
};

export type Registration_User_View_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Registration_User_View_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "registration_user_view" */
export type Registration_User_View_Aggregate_Fields = {
  __typename?: 'registration_user_view_aggregate_fields';
  avg?: Maybe<Registration_User_View_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Registration_User_View_Max_Fields>;
  min?: Maybe<Registration_User_View_Min_Fields>;
  stddev?: Maybe<Registration_User_View_Stddev_Fields>;
  stddev_pop?: Maybe<Registration_User_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Registration_User_View_Stddev_Samp_Fields>;
  sum?: Maybe<Registration_User_View_Sum_Fields>;
  var_pop?: Maybe<Registration_User_View_Var_Pop_Fields>;
  var_samp?: Maybe<Registration_User_View_Var_Samp_Fields>;
  variance?: Maybe<Registration_User_View_Variance_Fields>;
};


/** aggregate fields of "registration_user_view" */
export type Registration_User_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "registration_user_view" */
export type Registration_User_View_Aggregate_Order_By = {
  avg?: InputMaybe<Registration_User_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Registration_User_View_Max_Order_By>;
  min?: InputMaybe<Registration_User_View_Min_Order_By>;
  stddev?: InputMaybe<Registration_User_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Registration_User_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Registration_User_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Registration_User_View_Sum_Order_By>;
  var_pop?: InputMaybe<Registration_User_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Registration_User_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Registration_User_View_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Registration_User_View_Avg_Fields = {
  __typename?: 'registration_user_view_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "registration_user_view" */
export type Registration_User_View_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "registration_user_view". All fields are combined with a logical 'AND'. */
export type Registration_User_View_Bool_Exp = {
  _and?: InputMaybe<Array<Registration_User_View_Bool_Exp>>;
  _not?: InputMaybe<Registration_User_View_Bool_Exp>;
  _or?: InputMaybe<Array<Registration_User_View_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Bigint_Comparison_Exp>;
  registeredAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  registration?: InputMaybe<Registration_Bool_Exp>;
  registrationId?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** aggregate max on columns */
export type Registration_User_View_Max_Fields = {
  __typename?: 'registration_user_view_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['bigint']['output']>;
  registeredAt?: Maybe<Scalars['timestamptz']['output']>;
  registrationId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "registration_user_view" */
export type Registration_User_View_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registeredAt?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Registration_User_View_Min_Fields = {
  __typename?: 'registration_user_view_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['bigint']['output']>;
  registeredAt?: Maybe<Scalars['timestamptz']['output']>;
  registrationId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "registration_user_view" */
export type Registration_User_View_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registeredAt?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "registration_user_view". */
export type Registration_User_View_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registeredAt?: InputMaybe<Order_By>;
  registration?: InputMaybe<Registration_Order_By>;
  registrationId?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** select columns of table "registration_user_view" */
export enum Registration_User_View_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Position = 'position',
  /** column name */
  RegisteredAt = 'registeredAt',
  /** column name */
  RegistrationId = 'registrationId',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Registration_User_View_Stddev_Fields = {
  __typename?: 'registration_user_view_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "registration_user_view" */
export type Registration_User_View_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Registration_User_View_Stddev_Pop_Fields = {
  __typename?: 'registration_user_view_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "registration_user_view" */
export type Registration_User_View_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Registration_User_View_Stddev_Samp_Fields = {
  __typename?: 'registration_user_view_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "registration_user_view" */
export type Registration_User_View_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "registration_user_view" */
export type Registration_User_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Registration_User_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Registration_User_View_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['bigint']['input']>;
  registeredAt?: InputMaybe<Scalars['timestamptz']['input']>;
  registrationId?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Registration_User_View_Sum_Fields = {
  __typename?: 'registration_user_view_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['bigint']['output']>;
  registrationId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "registration_user_view" */
export type Registration_User_View_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Registration_User_View_Var_Pop_Fields = {
  __typename?: 'registration_user_view_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "registration_user_view" */
export type Registration_User_View_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Registration_User_View_Var_Samp_Fields = {
  __typename?: 'registration_user_view_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "registration_user_view" */
export type Registration_User_View_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Registration_User_View_Variance_Fields = {
  __typename?: 'registration_user_view_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
  registrationId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "registration_user_view" */
export type Registration_User_View_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  registrationId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Registration_Var_Pop_Fields = {
  __typename?: 'registration_var_pop_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "registration" */
export type Registration_Var_Pop_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Registration_Var_Samp_Fields = {
  __typename?: 'registration_var_samp_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "registration" */
export type Registration_Var_Samp_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Registration_Variance_Fields = {
  __typename?: 'registration_variance_fields';
  capacity?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  labelId?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "registration" */
export type Registration_Variance_Order_By = {
  capacity?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labelId?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
};

/** columns and relationships of "result" */
export type Result = {
  __typename?: 'result';
  attrs?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  audits: Array<Audit>;
  /** An aggregate relationship */
  audits_aggregate: Audit_Aggregate;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  invalidatedAt?: Maybe<Scalars['timestamptz']['output']>;
  invalidationReason?: Maybe<Scalars['String']['output']>;
  isLast?: Maybe<Scalars['Boolean']['output']>;
  /** An object relationship */
  object: Object;
  objectId: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  type: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "result" */
export type ResultAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "result" */
export type ResultAuditsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


/** columns and relationships of "result" */
export type ResultAudits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};

/** aggregated selection of "result" */
export type Result_Aggregate = {
  __typename?: 'result_aggregate';
  aggregate?: Maybe<Result_Aggregate_Fields>;
  nodes: Array<Result>;
};

export type Result_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Result_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Result_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Result_Aggregate_Bool_Exp_Count>;
};

export type Result_Aggregate_Bool_Exp_Bool_And = {
  arguments: Result_Select_Column_Result_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Result_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Result_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Result_Select_Column_Result_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Result_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Result_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Result_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "result" */
export type Result_Aggregate_Fields = {
  __typename?: 'result_aggregate_fields';
  avg?: Maybe<Result_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Result_Max_Fields>;
  min?: Maybe<Result_Min_Fields>;
  stddev?: Maybe<Result_Stddev_Fields>;
  stddev_pop?: Maybe<Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Result_Stddev_Samp_Fields>;
  sum?: Maybe<Result_Sum_Fields>;
  var_pop?: Maybe<Result_Var_Pop_Fields>;
  var_samp?: Maybe<Result_Var_Samp_Fields>;
  variance?: Maybe<Result_Variance_Fields>;
};


/** aggregate fields of "result" */
export type Result_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Result_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "result" */
export type Result_Aggregate_Order_By = {
  avg?: InputMaybe<Result_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Result_Max_Order_By>;
  min?: InputMaybe<Result_Min_Order_By>;
  stddev?: InputMaybe<Result_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Result_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Result_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Result_Sum_Order_By>;
  var_pop?: InputMaybe<Result_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Result_Var_Samp_Order_By>;
  variance?: InputMaybe<Result_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Result_Append_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
};

/** input type for inserting array relation for remote table "result" */
export type Result_Arr_Rel_Insert_Input = {
  data: Array<Result_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Result_On_Conflict>;
};

/** aggregate avg on columns */
export type Result_Avg_Fields = {
  __typename?: 'result_avg_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "result" */
export type Result_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "result". All fields are combined with a logical 'AND'. */
export type Result_Bool_Exp = {
  _and?: InputMaybe<Array<Result_Bool_Exp>>;
  _not?: InputMaybe<Result_Bool_Exp>;
  _or?: InputMaybe<Array<Result_Bool_Exp>>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  audits?: InputMaybe<Audit_Bool_Exp>;
  audits_aggregate?: InputMaybe<Audit_Aggregate_Bool_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  grade?: InputMaybe<Numeric_Comparison_Exp>;
  group?: InputMaybe<Group_Bool_Exp>;
  groupId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  invalidatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  invalidationReason?: InputMaybe<String_Comparison_Exp>;
  isLast?: InputMaybe<Boolean_Comparison_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "result" */
export enum Result_Constraint {
  /** unique or primary key constraint on columns "id" */
  ResultPkey = 'result_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Result_Delete_At_Path_Input = {
  attrs?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Result_Delete_Elem_Input = {
  attrs?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Result_Delete_Key_Input = {
  attrs?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "result" */
export type Result_Insert_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Group_Obj_Rel_Insert_Input>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Result_Max_Fields = {
  __typename?: 'result_max_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invalidatedAt?: Maybe<Scalars['timestamptz']['output']>;
  invalidationReason?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "result" */
export type Result_Max_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invalidatedAt?: InputMaybe<Order_By>;
  invalidationReason?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Result_Min_Fields = {
  __typename?: 'result_min_fields';
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invalidatedAt?: Maybe<Scalars['timestamptz']['output']>;
  invalidationReason?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "result" */
export type Result_Min_Order_By = {
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invalidatedAt?: InputMaybe<Order_By>;
  invalidationReason?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "result" */
export type Result_Mutation_Response = {
  __typename?: 'result_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Result>;
};

/** on_conflict condition type for table "result" */
export type Result_On_Conflict = {
  constraint: Result_Constraint;
  update_columns?: Array<Result_Update_Column>;
  where?: InputMaybe<Result_Bool_Exp>;
};

/** Ordering options when selecting data from "result". */
export type Result_Order_By = {
  attrs?: InputMaybe<Order_By>;
  audits_aggregate?: InputMaybe<Audit_Aggregate_Order_By>;
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  group?: InputMaybe<Group_Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invalidatedAt?: InputMaybe<Order_By>;
  invalidationReason?: InputMaybe<Order_By>;
  isLast?: InputMaybe<Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  type?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: result */
export type Result_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Result_Prepend_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "result" */
export enum Result_Select_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  Campus = 'campus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Grade = 'grade',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  InvalidatedAt = 'invalidatedAt',
  /** column name */
  InvalidationReason = 'invalidationReason',
  /** column name */
  IsLast = 'isLast',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  Path = 'path',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId',
  /** column name */
  Version = 'version'
}

/** select "result_aggregate_bool_exp_bool_and_arguments_columns" columns of table "result" */
export enum Result_Select_Column_Result_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsLast = 'isLast'
}

/** select "result_aggregate_bool_exp_bool_or_arguments_columns" columns of table "result" */
export enum Result_Select_Column_Result_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsLast = 'isLast'
}

/** input type for updating data in table "result" */
export type Result_Set_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Result_Stddev_Fields = {
  __typename?: 'result_stddev_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "result" */
export type Result_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Result_Stddev_Pop_Fields = {
  __typename?: 'result_stddev_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "result" */
export type Result_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Result_Stddev_Samp_Fields = {
  __typename?: 'result_stddev_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "result" */
export type Result_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "result" */
export type Result_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Result_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Result_Stream_Cursor_Value_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  campus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  grade?: InputMaybe<Scalars['numeric']['input']>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  invalidatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  invalidationReason?: InputMaybe<Scalars['String']['input']>;
  isLast?: InputMaybe<Scalars['Boolean']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
  version?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Result_Sum_Fields = {
  __typename?: 'result_sum_fields';
  eventId?: Maybe<Scalars['Int']['output']>;
  grade?: Maybe<Scalars['numeric']['output']>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "result" */
export type Result_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** update columns of table "result" */
export enum Result_Update_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  Version = 'version'
}

export type Result_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Result_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Result_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Result_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Result_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Result_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Result_Set_Input>;
  /** filter the rows which have to be updated */
  where: Result_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Result_Var_Pop_Fields = {
  __typename?: 'result_var_pop_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "result" */
export type Result_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Result_Var_Samp_Fields = {
  __typename?: 'result_var_samp_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "result" */
export type Result_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Result_Variance_Fields = {
  __typename?: 'result_variance_fields';
  eventId?: Maybe<Scalars['Float']['output']>;
  grade?: Maybe<Scalars['Float']['output']>;
  groupId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "result" */
export type Result_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  grade?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "role" */
export type Role = {
  __typename?: 'role';
  createdAt: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
};


/** columns and relationships of "role" */
export type RoleUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


/** columns and relationships of "role" */
export type RoleUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};

/** aggregated selection of "role" */
export type Role_Aggregate = {
  __typename?: 'role_aggregate';
  aggregate?: Maybe<Role_Aggregate_Fields>;
  nodes: Array<Role>;
};

/** aggregate fields of "role" */
export type Role_Aggregate_Fields = {
  __typename?: 'role_aggregate_fields';
  avg?: Maybe<Role_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Role_Max_Fields>;
  min?: Maybe<Role_Min_Fields>;
  stddev?: Maybe<Role_Stddev_Fields>;
  stddev_pop?: Maybe<Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Role_Stddev_Samp_Fields>;
  sum?: Maybe<Role_Sum_Fields>;
  var_pop?: Maybe<Role_Var_Pop_Fields>;
  var_samp?: Maybe<Role_Var_Samp_Fields>;
  variance?: Maybe<Role_Variance_Fields>;
};


/** aggregate fields of "role" */
export type Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Role_Avg_Fields = {
  __typename?: 'role_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "role". All fields are combined with a logical 'AND'. */
export type Role_Bool_Exp = {
  _and?: InputMaybe<Array<Role_Bool_Exp>>;
  _not?: InputMaybe<Role_Bool_Exp>;
  _or?: InputMaybe<Array<Role_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Role_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Bool_Exp>;
};

/** aggregate max on columns */
export type Role_Max_Fields = {
  __typename?: 'role_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Role_Min_Fields = {
  __typename?: 'role_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** Ordering options when selecting data from "role". */
export type Role_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Order_By>;
};

/** select columns of table "role" */
export enum Role_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type Role_Stddev_Fields = {
  __typename?: 'role_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Role_Stddev_Pop_Fields = {
  __typename?: 'role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Role_Stddev_Samp_Fields = {
  __typename?: 'role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "role" */
export type Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Role_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Role_Sum_Fields = {
  __typename?: 'role_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Role_Var_Pop_Fields = {
  __typename?: 'role_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Role_Var_Samp_Fields = {
  __typename?: 'role_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Role_Variance_Fields = {
  __typename?: 'role_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "audit" */
  audit: Array<Audit>;
  /** fetch aggregated fields from the table: "audit" */
  audit_aggregate: Audit_Aggregate;
  /** fetch data from the table: "audit" using primary key columns */
  audit_by_pk?: Maybe<Audit>;
  /** fetch data from the table: "audit_private" */
  audit_private: Array<Audit_Private>;
  /** fetch data from the table in a streaming manner: "audit_private" */
  audit_private_stream: Array<Audit_Private>;
  /** fetch data from the table in a streaming manner: "audit" */
  audit_stream: Array<Audit>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table in a streaming manner: "event" */
  event_stream: Array<Event>;
  /** fetch data from the table: "event_user" */
  event_user: Array<Event_User>;
  /** fetch aggregated fields from the table: "event_user" */
  event_user_aggregate: Event_User_Aggregate;
  /** fetch data from the table: "event_user" using primary key columns */
  event_user_by_pk?: Maybe<Event_User>;
  /** fetch data from the table in a streaming manner: "event_user" */
  event_user_stream: Array<Event_User>;
  /** fetch data from the table: "event_user_view" */
  event_user_view: Array<Event_User_View>;
  /** fetch aggregated fields from the table: "event_user_view" */
  event_user_view_aggregate: Event_User_View_Aggregate;
  /** fetch data from the table in a streaming manner: "event_user_view" */
  event_user_view_stream: Array<Event_User_View>;
  /** fetch data from the table: "group" */
  group: Array<Group>;
  /** fetch aggregated fields from the table: "group" */
  group_aggregate: Group_Aggregate;
  /** fetch data from the table: "group" using primary key columns */
  group_by_pk?: Maybe<Group>;
  /** fetch data from the table in a streaming manner: "group" */
  group_stream: Array<Group>;
  /** fetch data from the table: "group_user" */
  group_user: Array<Group_User>;
  /** fetch aggregated fields from the table: "group_user" */
  group_user_aggregate: Group_User_Aggregate;
  /** fetch data from the table: "group_user" using primary key columns */
  group_user_by_pk?: Maybe<Group_User>;
  /** fetch data from the table in a streaming manner: "group_user" */
  group_user_stream: Array<Group_User>;
  /** fetch data from the table: "label" */
  label: Array<Label>;
  /** fetch aggregated fields from the table: "label" */
  label_aggregate: Label_Aggregate;
  /** fetch data from the table: "label" using primary key columns */
  label_by_pk?: Maybe<Label>;
  /** fetch data from the table in a streaming manner: "label" */
  label_stream: Array<Label>;
  /** fetch data from the table: "label_user" */
  label_user: Array<Label_User>;
  /** fetch aggregated fields from the table: "label_user" */
  label_user_aggregate: Label_User_Aggregate;
  /** fetch data from the table: "label_user" using primary key columns */
  label_user_by_pk?: Maybe<Label_User>;
  /** fetch data from the table in a streaming manner: "label_user" */
  label_user_stream: Array<Label_User>;
  /** fetch data from the table: "markdown" */
  markdown: Array<Markdown>;
  /** fetch data from the table: "markdown" using primary key columns */
  markdown_by_pk?: Maybe<Markdown>;
  /** fetch data from the table in a streaming manner: "markdown" */
  markdown_stream: Array<Markdown>;
  /** fetch data from the table: "match" */
  match: Array<Match>;
  /** fetch aggregated fields from the table: "match" */
  match_aggregate: Match_Aggregate;
  /** fetch data from the table: "match" using primary key columns */
  match_by_pk?: Maybe<Match>;
  /** fetch data from the table in a streaming manner: "match" */
  match_stream: Array<Match>;
  /** fetch data from the table: "object" */
  object: Array<Object>;
  /** fetch aggregated fields from the table: "object" */
  object_aggregate: Object_Aggregate;
  /** fetch data from the table: "object_availability" */
  object_availability: Array<Object_Availability>;
  /** fetch aggregated fields from the table: "object_availability" */
  object_availability_aggregate: Object_Availability_Aggregate;
  /** fetch data from the table: "object_availability" using primary key columns */
  object_availability_by_pk?: Maybe<Object_Availability>;
  /** fetch data from the table in a streaming manner: "object_availability" */
  object_availability_stream: Array<Object_Availability>;
  /** fetch data from the table: "object" using primary key columns */
  object_by_pk?: Maybe<Object>;
  /** fetch data from the table: "object_child" */
  object_child: Array<Object_Child>;
  /** fetch aggregated fields from the table: "object_child" */
  object_child_aggregate: Object_Child_Aggregate;
  /** fetch data from the table: "object_child" using primary key columns */
  object_child_by_pk?: Maybe<Object_Child>;
  /** fetch data from the table in a streaming manner: "object_child" */
  object_child_stream: Array<Object_Child>;
  /** fetch data from the table in a streaming manner: "object" */
  object_stream: Array<Object>;
  /** fetch data from the table: "object_type" */
  object_type: Array<Object_Type>;
  /** fetch aggregated fields from the table: "object_type" */
  object_type_aggregate: Object_Type_Aggregate;
  /** fetch data from the table: "object_type" using primary key columns */
  object_type_by_pk?: Maybe<Object_Type>;
  /** fetch data from the table in a streaming manner: "object_type" */
  object_type_stream: Array<Object_Type>;
  /** fetch data from the table: "path" */
  path: Array<Path>;
  /** fetch aggregated fields from the table: "path" */
  path_aggregate: Path_Aggregate;
  /** fetch data from the table: "path_archive" */
  path_archive: Array<Path_Archive>;
  /** fetch aggregated fields from the table: "path_archive" */
  path_archive_aggregate: Path_Archive_Aggregate;
  /** fetch data from the table: "path_archive" using primary key columns */
  path_archive_by_pk?: Maybe<Path_Archive>;
  /** fetch data from the table in a streaming manner: "path_archive" */
  path_archive_stream: Array<Path_Archive>;
  /** fetch data from the table: "path" using primary key columns */
  path_by_pk?: Maybe<Path>;
  /** fetch data from the table in a streaming manner: "path" */
  path_stream: Array<Path>;
  /** fetch data from the table: "progress" */
  progress: Array<Progress>;
  /** fetch aggregated fields from the table: "progress" */
  progress_aggregate: Progress_Aggregate;
  /** fetch data from the table: "progress_by_path_view" */
  progress_by_path_view: Array<Progress_By_Path_View>;
  /** fetch aggregated fields from the table: "progress_by_path_view" */
  progress_by_path_view_aggregate: Progress_By_Path_View_Aggregate;
  /** fetch data from the table in a streaming manner: "progress_by_path_view" */
  progress_by_path_view_stream: Array<Progress_By_Path_View>;
  /** fetch data from the table: "progress" using primary key columns */
  progress_by_pk?: Maybe<Progress>;
  /** fetch data from the table in a streaming manner: "progress" */
  progress_stream: Array<Progress>;
  /** fetch data from the table: "record" */
  record: Array<Record>;
  /** fetch data from the table: "record" using primary key columns */
  record_by_pk?: Maybe<Record>;
  /** fetch data from the table: "record_public_view" */
  record_public_view: Array<Record_Public_View>;
  /** fetch aggregated fields from the table: "record_public_view" */
  record_public_view_aggregate: Record_Public_View_Aggregate;
  /** fetch data from the table in a streaming manner: "record_public_view" */
  record_public_view_stream: Array<Record_Public_View>;
  /** fetch data from the table in a streaming manner: "record" */
  record_stream: Array<Record>;
  /** fetch data from the table: "record_type" */
  record_type: Array<Record_Type>;
  /** fetch data from the table: "record_type" using primary key columns */
  record_type_by_pk?: Maybe<Record_Type>;
  /** fetch data from the table in a streaming manner: "record_type" */
  record_type_stream: Array<Record_Type>;
  /** fetch data from the table: "registration" */
  registration: Array<Registration>;
  /** fetch aggregated fields from the table: "registration" */
  registration_aggregate: Registration_Aggregate;
  /** fetch data from the table: "registration" using primary key columns */
  registration_by_pk?: Maybe<Registration>;
  /** fetch data from the table in a streaming manner: "registration" */
  registration_stream: Array<Registration>;
  /** fetch data from the table: "registration_user" */
  registration_user: Array<Registration_User>;
  /** fetch aggregated fields from the table: "registration_user" */
  registration_user_aggregate: Registration_User_Aggregate;
  /** fetch data from the table: "registration_user" using primary key columns */
  registration_user_by_pk?: Maybe<Registration_User>;
  /** fetch data from the table in a streaming manner: "registration_user" */
  registration_user_stream: Array<Registration_User>;
  /** fetch data from the table: "registration_user_view" */
  registration_user_view: Array<Registration_User_View>;
  /** fetch aggregated fields from the table: "registration_user_view" */
  registration_user_view_aggregate: Registration_User_View_Aggregate;
  /** fetch data from the table in a streaming manner: "registration_user_view" */
  registration_user_view_stream: Array<Registration_User_View>;
  /** fetch data from the table: "result" */
  result: Array<Result>;
  /** fetch aggregated fields from the table: "result" */
  result_aggregate: Result_Aggregate;
  /** fetch data from the table: "result" using primary key columns */
  result_by_pk?: Maybe<Result>;
  /** fetch data from the table in a streaming manner: "result" */
  result_stream: Array<Result>;
  /** fetch data from the table: "role" */
  role: Array<Role>;
  /** fetch aggregated fields from the table: "role" */
  role_aggregate: Role_Aggregate;
  /** fetch data from the table: "role" using primary key columns */
  role_by_pk?: Maybe<Role>;
  /** fetch data from the table in a streaming manner: "role" */
  role_stream: Array<Role>;
  /** fetch data from the table: "task" */
  task: Array<Task>;
  /** fetch data from the table: "task" using primary key columns */
  task_by_pk?: Maybe<Task>;
  /** fetch data from the table in a streaming manner: "task" */
  task_stream: Array<Task>;
  /** fetch data from the table: "timing" */
  timing: Array<Timing>;
  /** fetch data from the table in a streaming manner: "timing" */
  timing_stream: Array<Timing>;
  /** execute function "timings" which returns "timing" */
  timings?: Maybe<Timing>;
  /** fetch data from the table: "toad.campaign_games" */
  toad_campaign_games: Array<Toad_Campaign_Games>;
  /** fetch aggregated fields from the table: "toad.campaign_games" */
  toad_campaign_games_aggregate: Toad_Campaign_Games_Aggregate;
  /** fetch data from the table: "toad.campaign_games" using primary key columns */
  toad_campaign_games_by_pk?: Maybe<Toad_Campaign_Games>;
  /** fetch data from the table in a streaming manner: "toad.campaign_games" */
  toad_campaign_games_stream: Array<Toad_Campaign_Games>;
  /** fetch data from the table: "toad.campaigns" */
  toad_campaigns: Array<Toad_Campaigns>;
  /** fetch data from the table: "toad.campaigns" using primary key columns */
  toad_campaigns_by_pk?: Maybe<Toad_Campaigns>;
  /** fetch data from the table in a streaming manner: "toad.campaigns" */
  toad_campaigns_stream: Array<Toad_Campaigns>;
  /** fetch data from the table: "toad.games" */
  toad_games: Array<Toad_Games>;
  /** fetch aggregated fields from the table: "toad.games" */
  toad_games_aggregate: Toad_Games_Aggregate;
  /** fetch data from the table: "toad.games" using primary key columns */
  toad_games_by_pk?: Maybe<Toad_Games>;
  /** fetch data from the table in a streaming manner: "toad.games" */
  toad_games_stream: Array<Toad_Games>;
  /** fetch data from the table: "toad.session_game_results" */
  toad_session_game_results: Array<Toad_Session_Game_Results>;
  /** fetch data from the table: "toad.session_game_results" using primary key columns */
  toad_session_game_results_by_pk?: Maybe<Toad_Session_Game_Results>;
  /** fetch data from the table in a streaming manner: "toad.session_game_results" */
  toad_session_game_results_stream: Array<Toad_Session_Game_Results>;
  /** fetch data from the table: "toad.session_games" */
  toad_session_games: Array<Toad_Session_Games>;
  /** fetch aggregated fields from the table: "toad.session_games" */
  toad_session_games_aggregate: Toad_Session_Games_Aggregate;
  /** fetch data from the table: "toad.session_games" using primary key columns */
  toad_session_games_by_pk?: Maybe<Toad_Session_Games>;
  /** fetch data from the table in a streaming manner: "toad.session_games" */
  toad_session_games_stream: Array<Toad_Session_Games>;
  /** fetch data from the table: "toad.sessions" */
  toad_sessions: Array<Toad_Sessions>;
  /** fetch aggregated fields from the table: "toad.sessions" */
  toad_sessions_aggregate: Toad_Sessions_Aggregate;
  /** fetch data from the table: "toad.sessions" using primary key columns */
  toad_sessions_by_pk?: Maybe<Toad_Sessions>;
  /** fetch data from the table in a streaming manner: "toad.sessions" */
  toad_sessions_stream: Array<Toad_Sessions>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table in a streaming manner: "transaction" */
  transaction_stream: Array<Transaction>;
  /** fetch data from the table: "transaction_type" */
  transaction_type: Array<Transaction_Type>;
  /** fetch aggregated fields from the table: "transaction_type" */
  transaction_type_aggregate: Transaction_Type_Aggregate;
  /** fetch data from the table: "transaction_type" using primary key columns */
  transaction_type_by_pk?: Maybe<Transaction_Type>;
  /** fetch data from the table in a streaming manner: "transaction_type" */
  transaction_type_stream: Array<Transaction_Type>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "user_public_view" */
  user_public_view: Array<User_Public_View>;
  /** fetch data from the table in a streaming manner: "user_public_view" */
  user_public_view_stream: Array<User_Public_View>;
  /** fetch data from the table: "user_role" */
  user_role: Array<User_Role>;
  /** fetch aggregated fields from the table: "user_role" */
  user_role_aggregate: User_Role_Aggregate;
  /** fetch data from the table: "user_role" using primary key columns */
  user_role_by_pk?: Maybe<User_Role>;
  /** fetch data from the table in a streaming manner: "user_role" */
  user_role_stream: Array<User_Role>;
  /** fetch data from the table: "user_roles_view" */
  user_roles_view: Array<User_Roles_View>;
  /** fetch aggregated fields from the table: "user_roles_view" */
  user_roles_view_aggregate: User_Roles_View_Aggregate;
  /** fetch data from the table in a streaming manner: "user_roles_view" */
  user_roles_view_stream: Array<User_Roles_View>;
  /** fetch data from the table in a streaming manner: "user" */
  user_stream: Array<User>;
  /** fetch data from the table: "xp_view" */
  xp_view: Array<Xp_View>;
  /** fetch data from the table in a streaming manner: "xp_view" */
  xp_view_stream: Array<Xp_View>;
};


export type Subscription_RootAuditArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


export type Subscription_RootAudit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


export type Subscription_RootAudit_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootAudit_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Private_Order_By>>;
  where?: InputMaybe<Audit_Private_Bool_Exp>;
};


export type Subscription_RootAudit_Private_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Private_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Private_Bool_Exp>;
};


export type Subscription_RootAudit_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Audit_Stream_Cursor_Input>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


export type Subscription_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEvent_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_UserArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


export type Subscription_RootEvent_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


export type Subscription_RootEvent_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootEvent_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Event_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


export type Subscription_RootEvent_User_ViewArgs = {
  distinct_on?: InputMaybe<Array<Event_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_View_Order_By>>;
  where?: InputMaybe<Event_User_View_Bool_Exp>;
};


export type Subscription_RootEvent_User_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_View_Order_By>>;
  where?: InputMaybe<Event_User_View_Bool_Exp>;
};


export type Subscription_RootEvent_User_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Event_User_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_User_View_Bool_Exp>;
};


export type Subscription_RootGroupArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGroup_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Group_Stream_Cursor_Input>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_UserArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


export type Subscription_RootGroup_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


export type Subscription_RootGroup_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootGroup_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Group_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


export type Subscription_RootLabelArgs = {
  distinct_on?: InputMaybe<Array<Label_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_Order_By>>;
  where?: InputMaybe<Label_Bool_Exp>;
};


export type Subscription_RootLabel_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_Order_By>>;
  where?: InputMaybe<Label_Bool_Exp>;
};


export type Subscription_RootLabel_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLabel_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Label_Stream_Cursor_Input>>;
  where?: InputMaybe<Label_Bool_Exp>;
};


export type Subscription_RootLabel_UserArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


export type Subscription_RootLabel_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


export type Subscription_RootLabel_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLabel_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Label_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


export type Subscription_RootMarkdownArgs = {
  distinct_on?: InputMaybe<Array<Markdown_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Markdown_Order_By>>;
  where?: InputMaybe<Markdown_Bool_Exp>;
};


export type Subscription_RootMarkdown_By_PkArgs = {
  name: Scalars['String']['input'];
};


export type Subscription_RootMarkdown_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Markdown_Stream_Cursor_Input>>;
  where?: InputMaybe<Markdown_Bool_Exp>;
};


export type Subscription_RootMatchArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Subscription_RootMatch_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Subscription_RootMatch_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMatch_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Match_Stream_Cursor_Input>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


export type Subscription_RootObjectArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


export type Subscription_RootObject_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


export type Subscription_RootObject_AvailabilityArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


export type Subscription_RootObject_Availability_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


export type Subscription_RootObject_Availability_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootObject_Availability_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Object_Availability_Stream_Cursor_Input>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


export type Subscription_RootObject_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootObject_ChildArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


export type Subscription_RootObject_Child_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Child_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Child_Order_By>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


export type Subscription_RootObject_Child_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootObject_Child_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Object_Child_Stream_Cursor_Input>>;
  where?: InputMaybe<Object_Child_Bool_Exp>;
};


export type Subscription_RootObject_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Object_Stream_Cursor_Input>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


export type Subscription_RootObject_TypeArgs = {
  distinct_on?: InputMaybe<Array<Object_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Type_Order_By>>;
  where?: InputMaybe<Object_Type_Bool_Exp>;
};


export type Subscription_RootObject_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Type_Order_By>>;
  where?: InputMaybe<Object_Type_Bool_Exp>;
};


export type Subscription_RootObject_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_RootObject_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Object_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Object_Type_Bool_Exp>;
};


export type Subscription_RootPathArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


export type Subscription_RootPath_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Path_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Order_By>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


export type Subscription_RootPath_ArchiveArgs = {
  distinct_on?: InputMaybe<Array<Path_Archive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Archive_Order_By>>;
  where?: InputMaybe<Path_Archive_Bool_Exp>;
};


export type Subscription_RootPath_Archive_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Path_Archive_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Path_Archive_Order_By>>;
  where?: InputMaybe<Path_Archive_Bool_Exp>;
};


export type Subscription_RootPath_Archive_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootPath_Archive_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Path_Archive_Stream_Cursor_Input>>;
  where?: InputMaybe<Path_Archive_Bool_Exp>;
};


export type Subscription_RootPath_By_PkArgs = {
  path: Scalars['String']['input'];
};


export type Subscription_RootPath_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Path_Stream_Cursor_Input>>;
  where?: InputMaybe<Path_Bool_Exp>;
};


export type Subscription_RootProgressArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


export type Subscription_RootProgress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


export type Subscription_RootProgress_By_Path_ViewArgs = {
  distinct_on?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_By_Path_View_Order_By>>;
  where?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
};


export type Subscription_RootProgress_By_Path_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_By_Path_View_Order_By>>;
  where?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
};


export type Subscription_RootProgress_By_Path_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Progress_By_Path_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
};


export type Subscription_RootProgress_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootProgress_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Progress_Stream_Cursor_Input>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


export type Subscription_RootRecordArgs = {
  distinct_on?: InputMaybe<Array<Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Order_By>>;
  where?: InputMaybe<Record_Bool_Exp>;
};


export type Subscription_RootRecord_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRecord_Public_ViewArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


export type Subscription_RootRecord_Public_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Record_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Public_View_Order_By>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


export type Subscription_RootRecord_Public_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Record_Public_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Record_Public_View_Bool_Exp>;
};


export type Subscription_RootRecord_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Record_Stream_Cursor_Input>>;
  where?: InputMaybe<Record_Bool_Exp>;
};


export type Subscription_RootRecord_TypeArgs = {
  distinct_on?: InputMaybe<Array<Record_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Type_Order_By>>;
  where?: InputMaybe<Record_Type_Bool_Exp>;
};


export type Subscription_RootRecord_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_RootRecord_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Record_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Record_Type_Bool_Exp>;
};


export type Subscription_RootRegistrationArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


export type Subscription_RootRegistration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_Order_By>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


export type Subscription_RootRegistration_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRegistration_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Registration_Stream_Cursor_Input>>;
  where?: InputMaybe<Registration_Bool_Exp>;
};


export type Subscription_RootRegistration_UserArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


export type Subscription_RootRegistration_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


export type Subscription_RootRegistration_User_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRegistration_User_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Registration_User_Stream_Cursor_Input>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


export type Subscription_RootRegistration_User_ViewArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_View_Order_By>>;
  where?: InputMaybe<Registration_User_View_Bool_Exp>;
};


export type Subscription_RootRegistration_User_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_View_Order_By>>;
  where?: InputMaybe<Registration_User_View_Bool_Exp>;
};


export type Subscription_RootRegistration_User_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Registration_User_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Registration_User_View_Bool_Exp>;
};


export type Subscription_RootResultArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Subscription_RootResult_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Subscription_RootResult_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootResult_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Result_Stream_Cursor_Input>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


export type Subscription_RootRoleArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Role_Order_By>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootRole_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRole_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Role_Stream_Cursor_Input>>;
  where?: InputMaybe<Role_Bool_Exp>;
};


export type Subscription_RootTaskArgs = {
  distinct_on?: InputMaybe<Array<Task_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Task_Order_By>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTask_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTask_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Task_Stream_Cursor_Input>>;
  where?: InputMaybe<Task_Bool_Exp>;
};


export type Subscription_RootTimingArgs = {
  distinct_on?: InputMaybe<Array<Timing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Timing_Order_By>>;
  where?: InputMaybe<Timing_Bool_Exp>;
};


export type Subscription_RootTiming_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Timing_Stream_Cursor_Input>>;
  where?: InputMaybe<Timing_Bool_Exp>;
};


export type Subscription_RootTimingsArgs = {
  args: Timings_Args;
  distinct_on?: InputMaybe<Array<Timing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Timing_Order_By>>;
  where?: InputMaybe<Timing_Bool_Exp>;
};


export type Subscription_RootToad_Campaign_GamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


export type Subscription_RootToad_Campaign_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


export type Subscription_RootToad_Campaign_Games_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootToad_Campaign_Games_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Toad_Campaign_Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


export type Subscription_RootToad_CampaignsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaigns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaigns_Order_By>>;
  where?: InputMaybe<Toad_Campaigns_Bool_Exp>;
};


export type Subscription_RootToad_Campaigns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootToad_Campaigns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Toad_Campaigns_Stream_Cursor_Input>>;
  where?: InputMaybe<Toad_Campaigns_Bool_Exp>;
};


export type Subscription_RootToad_GamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Games_Order_By>>;
  where?: InputMaybe<Toad_Games_Bool_Exp>;
};


export type Subscription_RootToad_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Games_Order_By>>;
  where?: InputMaybe<Toad_Games_Bool_Exp>;
};


export type Subscription_RootToad_Games_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootToad_Games_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Toad_Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Toad_Games_Bool_Exp>;
};


export type Subscription_RootToad_Session_Game_ResultsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Game_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Game_Results_Order_By>>;
  where?: InputMaybe<Toad_Session_Game_Results_Bool_Exp>;
};


export type Subscription_RootToad_Session_Game_Results_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootToad_Session_Game_Results_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Toad_Session_Game_Results_Stream_Cursor_Input>>;
  where?: InputMaybe<Toad_Session_Game_Results_Bool_Exp>;
};


export type Subscription_RootToad_Session_GamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Games_Order_By>>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};


export type Subscription_RootToad_Session_Games_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Games_Order_By>>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};


export type Subscription_RootToad_Session_Games_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootToad_Session_Games_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Toad_Session_Games_Stream_Cursor_Input>>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};


export type Subscription_RootToad_SessionsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


export type Subscription_RootToad_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


export type Subscription_RootToad_Sessions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootToad_Sessions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Toad_Sessions_Stream_Cursor_Input>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootTransaction_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Type_Order_By>>;
  where?: InputMaybe<Transaction_Type_Bool_Exp>;
};


export type Subscription_RootTransaction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Type_Order_By>>;
  where?: InputMaybe<Transaction_Type_Bool_Exp>;
};


export type Subscription_RootTransaction_Type_By_PkArgs = {
  type: Scalars['String']['input'];
};


export type Subscription_RootTransaction_Type_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Transaction_Type_Stream_Cursor_Input>>;
  where?: InputMaybe<Transaction_Type_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Public_ViewArgs = {
  distinct_on?: InputMaybe<Array<User_Public_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Public_View_Order_By>>;
  where?: InputMaybe<User_Public_View_Bool_Exp>;
};


export type Subscription_RootUser_Public_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Public_View_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Public_View_Bool_Exp>;
};


export type Subscription_RootUser_RoleArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Role_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Role_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Role_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


export type Subscription_RootUser_Roles_ViewArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


export type Subscription_RootUser_Roles_View_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


export type Subscription_RootUser_Roles_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Roles_View_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootXp_ViewArgs = {
  distinct_on?: InputMaybe<Array<Xp_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Xp_View_Order_By>>;
  where?: InputMaybe<Xp_View_Bool_Exp>;
};


export type Subscription_RootXp_View_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Xp_View_Stream_Cursor_Input>>;
  where?: InputMaybe<Xp_View_Bool_Exp>;
};

/** columns and relationships of "task" */
export type Task = {
  __typename?: 'task';
  attrs: Scalars['jsonb']['output'];
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']['output']>;
  /** An object relationship */
  group?: Maybe<Group>;
  groupId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An object relationship */
  object?: Maybe<Object>;
  objectId?: Maybe<Scalars['Int']['output']>;
  output?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  pathByPath?: Maybe<Path>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};


/** columns and relationships of "task" */
export type TaskAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** order by aggregate values of table "task" */
export type Task_Aggregate_Order_By = {
  avg?: InputMaybe<Task_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Task_Max_Order_By>;
  min?: InputMaybe<Task_Min_Order_By>;
  stddev?: InputMaybe<Task_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Task_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Task_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Task_Sum_Order_By>;
  var_pop?: InputMaybe<Task_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Task_Var_Samp_Order_By>;
  variance?: InputMaybe<Task_Variance_Order_By>;
};

/** order by avg() on columns of table "task" */
export type Task_Avg_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "task". All fields are combined with a logical 'AND'. */
export type Task_Bool_Exp = {
  _and?: InputMaybe<Array<Task_Bool_Exp>>;
  _not?: InputMaybe<Task_Bool_Exp>;
  _or?: InputMaybe<Array<Task_Bool_Exp>>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  group?: InputMaybe<Group_Bool_Exp>;
  groupId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  output?: InputMaybe<String_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "task" */
export type Task_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "task" */
export type Task_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "task". */
export type Task_Order_By = {
  attrs?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  group?: InputMaybe<Group_Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  output?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  status?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "task" */
export enum Task_Select_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  GroupId = 'groupId',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  Output = 'output',
  /** column name */
  Path = 'path',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** order by stddev() on columns of table "task" */
export type Task_Stddev_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "task" */
export type Task_Stddev_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "task" */
export type Task_Stddev_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "task" */
export type Task_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Task_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Task_Stream_Cursor_Value_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  output?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "task" */
export type Task_Sum_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "task" */
export type Task_Var_Pop_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "task" */
export type Task_Var_Samp_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "task" */
export type Task_Variance_Order_By = {
  eventId?: InputMaybe<Order_By>;
  groupId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "timing" */
export type Timing = {
  __typename?: 'timing';
  audit?: Maybe<Scalars['timestamptz']['output']>;
  event?: Maybe<Scalars['timestamptz']['output']>;
  group?: Maybe<Scalars['timestamptz']['output']>;
  match?: Maybe<Scalars['timestamptz']['output']>;
  progress?: Maybe<Scalars['timestamptz']['output']>;
  record?: Maybe<Scalars['timestamptz']['output']>;
  registration?: Maybe<Scalars['timestamptz']['output']>;
  transaction?: Maybe<Scalars['timestamptz']['output']>;
  user?: Maybe<Scalars['timestamptz']['output']>;
};

/** Boolean expression to filter rows from the table "timing". All fields are combined with a logical 'AND'. */
export type Timing_Bool_Exp = {
  _and?: InputMaybe<Array<Timing_Bool_Exp>>;
  _not?: InputMaybe<Timing_Bool_Exp>;
  _or?: InputMaybe<Array<Timing_Bool_Exp>>;
  audit?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Timestamptz_Comparison_Exp>;
  group?: InputMaybe<Timestamptz_Comparison_Exp>;
  match?: InputMaybe<Timestamptz_Comparison_Exp>;
  progress?: InputMaybe<Timestamptz_Comparison_Exp>;
  record?: InputMaybe<Timestamptz_Comparison_Exp>;
  registration?: InputMaybe<Timestamptz_Comparison_Exp>;
  transaction?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** Ordering options when selecting data from "timing". */
export type Timing_Order_By = {
  audit?: InputMaybe<Order_By>;
  event?: InputMaybe<Order_By>;
  group?: InputMaybe<Order_By>;
  match?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  record?: InputMaybe<Order_By>;
  registration?: InputMaybe<Order_By>;
  transaction?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** select columns of table "timing" */
export enum Timing_Select_Column {
  /** column name */
  Audit = 'audit',
  /** column name */
  Event = 'event',
  /** column name */
  Group = 'group',
  /** column name */
  Match = 'match',
  /** column name */
  Progress = 'progress',
  /** column name */
  Record = 'record',
  /** column name */
  Registration = 'registration',
  /** column name */
  Transaction = 'transaction',
  /** column name */
  User = 'user'
}

/** Streaming cursor of the table "timing" */
export type Timing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Timing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Timing_Stream_Cursor_Value_Input = {
  audit?: InputMaybe<Scalars['timestamptz']['input']>;
  event?: InputMaybe<Scalars['timestamptz']['input']>;
  group?: InputMaybe<Scalars['timestamptz']['input']>;
  match?: InputMaybe<Scalars['timestamptz']['input']>;
  progress?: InputMaybe<Scalars['timestamptz']['input']>;
  record?: InputMaybe<Scalars['timestamptz']['input']>;
  registration?: InputMaybe<Scalars['timestamptz']['input']>;
  transaction?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Scalars['timestamptz']['input']>;
};

export type Timings_Args = {
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "toad.campaign_games" */
export type Toad_Campaign_Games = {
  __typename?: 'toad_campaign_games';
  /** An object relationship */
  campaign: Toad_Campaigns;
  campaign_id: Scalars['uuid']['output'];
  game_id: Scalars['uuid']['output'];
  id: Scalars['Int']['output'];
  overriden_duration?: Maybe<Scalars['Int']['output']>;
  overriden_points?: Maybe<Scalars['Int']['output']>;
  position: Scalars['Int']['output'];
  /** An object relationship */
  ref: Toad_Games;
};

/** aggregated selection of "toad.campaign_games" */
export type Toad_Campaign_Games_Aggregate = {
  __typename?: 'toad_campaign_games_aggregate';
  aggregate?: Maybe<Toad_Campaign_Games_Aggregate_Fields>;
  nodes: Array<Toad_Campaign_Games>;
};

export type Toad_Campaign_Games_Aggregate_Bool_Exp = {
  count?: InputMaybe<Toad_Campaign_Games_Aggregate_Bool_Exp_Count>;
};

export type Toad_Campaign_Games_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "toad.campaign_games" */
export type Toad_Campaign_Games_Aggregate_Fields = {
  __typename?: 'toad_campaign_games_aggregate_fields';
  avg?: Maybe<Toad_Campaign_Games_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Toad_Campaign_Games_Max_Fields>;
  min?: Maybe<Toad_Campaign_Games_Min_Fields>;
  stddev?: Maybe<Toad_Campaign_Games_Stddev_Fields>;
  stddev_pop?: Maybe<Toad_Campaign_Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Toad_Campaign_Games_Stddev_Samp_Fields>;
  sum?: Maybe<Toad_Campaign_Games_Sum_Fields>;
  var_pop?: Maybe<Toad_Campaign_Games_Var_Pop_Fields>;
  var_samp?: Maybe<Toad_Campaign_Games_Var_Samp_Fields>;
  variance?: Maybe<Toad_Campaign_Games_Variance_Fields>;
};


/** aggregate fields of "toad.campaign_games" */
export type Toad_Campaign_Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "toad.campaign_games" */
export type Toad_Campaign_Games_Aggregate_Order_By = {
  avg?: InputMaybe<Toad_Campaign_Games_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Toad_Campaign_Games_Max_Order_By>;
  min?: InputMaybe<Toad_Campaign_Games_Min_Order_By>;
  stddev?: InputMaybe<Toad_Campaign_Games_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Toad_Campaign_Games_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Toad_Campaign_Games_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Toad_Campaign_Games_Sum_Order_By>;
  var_pop?: InputMaybe<Toad_Campaign_Games_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Toad_Campaign_Games_Var_Samp_Order_By>;
  variance?: InputMaybe<Toad_Campaign_Games_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Toad_Campaign_Games_Avg_Fields = {
  __typename?: 'toad_campaign_games_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  overriden_duration?: Maybe<Scalars['Float']['output']>;
  overriden_points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "toad.campaign_games". All fields are combined with a logical 'AND'. */
export type Toad_Campaign_Games_Bool_Exp = {
  _and?: InputMaybe<Array<Toad_Campaign_Games_Bool_Exp>>;
  _not?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
  _or?: InputMaybe<Array<Toad_Campaign_Games_Bool_Exp>>;
  campaign?: InputMaybe<Toad_Campaigns_Bool_Exp>;
  campaign_id?: InputMaybe<Uuid_Comparison_Exp>;
  game_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  overriden_duration?: InputMaybe<Int_Comparison_Exp>;
  overriden_points?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  ref?: InputMaybe<Toad_Games_Bool_Exp>;
};

/** aggregate max on columns */
export type Toad_Campaign_Games_Max_Fields = {
  __typename?: 'toad_campaign_games_max_fields';
  campaign_id?: Maybe<Scalars['uuid']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  overriden_duration?: Maybe<Scalars['Int']['output']>;
  overriden_points?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Max_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Toad_Campaign_Games_Min_Fields = {
  __typename?: 'toad_campaign_games_min_fields';
  campaign_id?: Maybe<Scalars['uuid']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  overriden_duration?: Maybe<Scalars['Int']['output']>;
  overriden_points?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Min_Order_By = {
  campaign_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "toad.campaign_games". */
export type Toad_Campaign_Games_Order_By = {
  campaign?: InputMaybe<Toad_Campaigns_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  ref?: InputMaybe<Toad_Games_Order_By>;
};

/** select columns of table "toad.campaign_games" */
export enum Toad_Campaign_Games_Select_Column {
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  OverridenDuration = 'overriden_duration',
  /** column name */
  OverridenPoints = 'overriden_points',
  /** column name */
  Position = 'position'
}

/** aggregate stddev on columns */
export type Toad_Campaign_Games_Stddev_Fields = {
  __typename?: 'toad_campaign_games_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  overriden_duration?: Maybe<Scalars['Float']['output']>;
  overriden_points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Toad_Campaign_Games_Stddev_Pop_Fields = {
  __typename?: 'toad_campaign_games_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  overriden_duration?: Maybe<Scalars['Float']['output']>;
  overriden_points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Toad_Campaign_Games_Stddev_Samp_Fields = {
  __typename?: 'toad_campaign_games_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  overriden_duration?: Maybe<Scalars['Float']['output']>;
  overriden_points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "toad_campaign_games" */
export type Toad_Campaign_Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Toad_Campaign_Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Toad_Campaign_Games_Stream_Cursor_Value_Input = {
  campaign_id?: InputMaybe<Scalars['uuid']['input']>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  overriden_duration?: InputMaybe<Scalars['Int']['input']>;
  overriden_points?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Toad_Campaign_Games_Sum_Fields = {
  __typename?: 'toad_campaign_games_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  overriden_duration?: Maybe<Scalars['Int']['output']>;
  overriden_points?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Toad_Campaign_Games_Var_Pop_Fields = {
  __typename?: 'toad_campaign_games_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  overriden_duration?: Maybe<Scalars['Float']['output']>;
  overriden_points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Toad_Campaign_Games_Var_Samp_Fields = {
  __typename?: 'toad_campaign_games_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  overriden_duration?: Maybe<Scalars['Float']['output']>;
  overriden_points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Toad_Campaign_Games_Variance_Fields = {
  __typename?: 'toad_campaign_games_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  overriden_duration?: Maybe<Scalars['Float']['output']>;
  overriden_points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "toad.campaign_games" */
export type Toad_Campaign_Games_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  overriden_duration?: InputMaybe<Order_By>;
  overriden_points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "toad.campaigns" */
export type Toad_Campaigns = {
  __typename?: 'toad_campaigns';
  attempts: Scalars['Int']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  games: Array<Toad_Campaign_Games>;
  /** An aggregate relationship */
  games_aggregate: Toad_Campaign_Games_Aggregate;
  id: Scalars['uuid']['output'];
  instructions?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  sessions: Array<Toad_Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Toad_Sessions_Aggregate;
  title: Scalars['String']['output'];
  /** An object relationship */
  user?: Maybe<User>;
  user_id: Scalars['Int']['output'];
};


/** columns and relationships of "toad.campaigns" */
export type Toad_CampaignsGamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


/** columns and relationships of "toad.campaigns" */
export type Toad_CampaignsGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


/** columns and relationships of "toad.campaigns" */
export type Toad_CampaignsSessionsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


/** columns and relationships of "toad.campaigns" */
export type Toad_CampaignsSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "toad.campaigns". All fields are combined with a logical 'AND'. */
export type Toad_Campaigns_Bool_Exp = {
  _and?: InputMaybe<Array<Toad_Campaigns_Bool_Exp>>;
  _not?: InputMaybe<Toad_Campaigns_Bool_Exp>;
  _or?: InputMaybe<Array<Toad_Campaigns_Bool_Exp>>;
  attempts?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  games?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
  games_aggregate?: InputMaybe<Toad_Campaign_Games_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instructions?: InputMaybe<String_Comparison_Exp>;
  sessions?: InputMaybe<Toad_Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Toad_Sessions_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "toad.campaigns". */
export type Toad_Campaigns_Order_By = {
  attempts?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  games_aggregate?: InputMaybe<Toad_Campaign_Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  sessions_aggregate?: InputMaybe<Toad_Sessions_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "toad.campaigns" */
export enum Toad_Campaigns_Select_Column {
  /** column name */
  Attempts = 'attempts',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'user_id'
}

/** Streaming cursor of the table "toad_campaigns" */
export type Toad_Campaigns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Toad_Campaigns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Toad_Campaigns_Stream_Cursor_Value_Input = {
  attempts?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instructions?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** columns and relationships of "toad.games" */
export type Toad_Games = {
  __typename?: 'toad_games';
  /** An array relationship */
  campaigns: Array<Toad_Campaign_Games>;
  /** An aggregate relationship */
  campaigns_aggregate: Toad_Campaign_Games_Aggregate;
  duration: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Int']['output'];
};


/** columns and relationships of "toad.games" */
export type Toad_GamesCampaignsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};


/** columns and relationships of "toad.games" */
export type Toad_GamesCampaigns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Campaign_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Campaign_Games_Order_By>>;
  where?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
};

/** aggregated selection of "toad.games" */
export type Toad_Games_Aggregate = {
  __typename?: 'toad_games_aggregate';
  aggregate?: Maybe<Toad_Games_Aggregate_Fields>;
  nodes: Array<Toad_Games>;
};

/** aggregate fields of "toad.games" */
export type Toad_Games_Aggregate_Fields = {
  __typename?: 'toad_games_aggregate_fields';
  avg?: Maybe<Toad_Games_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Toad_Games_Max_Fields>;
  min?: Maybe<Toad_Games_Min_Fields>;
  stddev?: Maybe<Toad_Games_Stddev_Fields>;
  stddev_pop?: Maybe<Toad_Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Toad_Games_Stddev_Samp_Fields>;
  sum?: Maybe<Toad_Games_Sum_Fields>;
  var_pop?: Maybe<Toad_Games_Var_Pop_Fields>;
  var_samp?: Maybe<Toad_Games_Var_Samp_Fields>;
  variance?: Maybe<Toad_Games_Variance_Fields>;
};


/** aggregate fields of "toad.games" */
export type Toad_Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Toad_Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Toad_Games_Avg_Fields = {
  __typename?: 'toad_games_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "toad.games". All fields are combined with a logical 'AND'. */
export type Toad_Games_Bool_Exp = {
  _and?: InputMaybe<Array<Toad_Games_Bool_Exp>>;
  _not?: InputMaybe<Toad_Games_Bool_Exp>;
  _or?: InputMaybe<Array<Toad_Games_Bool_Exp>>;
  campaigns?: InputMaybe<Toad_Campaign_Games_Bool_Exp>;
  campaigns_aggregate?: InputMaybe<Toad_Campaign_Games_Aggregate_Bool_Exp>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type Toad_Games_Max_Fields = {
  __typename?: 'toad_games_max_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Toad_Games_Min_Fields = {
  __typename?: 'toad_games_min_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

/** Ordering options when selecting data from "toad.games". */
export type Toad_Games_Order_By = {
  campaigns_aggregate?: InputMaybe<Toad_Campaign_Games_Aggregate_Order_By>;
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
};

/** select columns of table "toad.games" */
export enum Toad_Games_Select_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points'
}

/** aggregate stddev on columns */
export type Toad_Games_Stddev_Fields = {
  __typename?: 'toad_games_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Toad_Games_Stddev_Pop_Fields = {
  __typename?: 'toad_games_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Toad_Games_Stddev_Samp_Fields = {
  __typename?: 'toad_games_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "toad_games" */
export type Toad_Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Toad_Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Toad_Games_Stream_Cursor_Value_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Toad_Games_Sum_Fields = {
  __typename?: 'toad_games_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

/** aggregate var_pop on columns */
export type Toad_Games_Var_Pop_Fields = {
  __typename?: 'toad_games_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Toad_Games_Var_Samp_Fields = {
  __typename?: 'toad_games_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Toad_Games_Variance_Fields = {
  __typename?: 'toad_games_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "toad.session_game_results" */
export type Toad_Session_Game_Results = {
  __typename?: 'toad_session_game_results';
  attempts: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  level: Scalars['Int']['output'];
  /** An object relationship */
  result: Toad_Session_Games;
  session_game_id: Scalars['Int']['output'];
};

/** order by aggregate values of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Aggregate_Order_By = {
  avg?: InputMaybe<Toad_Session_Game_Results_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Toad_Session_Game_Results_Max_Order_By>;
  min?: InputMaybe<Toad_Session_Game_Results_Min_Order_By>;
  stddev?: InputMaybe<Toad_Session_Game_Results_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Toad_Session_Game_Results_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Toad_Session_Game_Results_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Toad_Session_Game_Results_Sum_Order_By>;
  var_pop?: InputMaybe<Toad_Session_Game_Results_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Toad_Session_Game_Results_Var_Samp_Order_By>;
  variance?: InputMaybe<Toad_Session_Game_Results_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "toad.session_game_results" */
export type Toad_Session_Game_Results_Arr_Rel_Insert_Input = {
  data: Array<Toad_Session_Game_Results_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Toad_Session_Game_Results_On_Conflict>;
};

/** order by avg() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Avg_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "toad.session_game_results". All fields are combined with a logical 'AND'. */
export type Toad_Session_Game_Results_Bool_Exp = {
  _and?: InputMaybe<Array<Toad_Session_Game_Results_Bool_Exp>>;
  _not?: InputMaybe<Toad_Session_Game_Results_Bool_Exp>;
  _or?: InputMaybe<Array<Toad_Session_Game_Results_Bool_Exp>>;
  attempts?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  level?: InputMaybe<Int_Comparison_Exp>;
  result?: InputMaybe<Toad_Session_Games_Bool_Exp>;
  session_game_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "toad.session_game_results" */
export enum Toad_Session_Game_Results_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionGameResultsPkey = 'session_game_results_pkey',
  /** unique or primary key constraint on columns "session_game_id", "level" */
  SessionGameResultsSessionGameIdLevelKey = 'session_game_results_session_game_id_level_key'
}

/** input type for inserting data into table "toad.session_game_results" */
export type Toad_Session_Game_Results_Insert_Input = {
  attempts?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  result?: InputMaybe<Toad_Session_Games_Obj_Rel_Insert_Input>;
  session_game_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by max() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Max_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Min_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "toad.session_game_results" */
export type Toad_Session_Game_Results_Mutation_Response = {
  __typename?: 'toad_session_game_results_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Toad_Session_Game_Results>;
};

/** on_conflict condition type for table "toad.session_game_results" */
export type Toad_Session_Game_Results_On_Conflict = {
  constraint: Toad_Session_Game_Results_Constraint;
  update_columns?: Array<Toad_Session_Game_Results_Update_Column>;
  where?: InputMaybe<Toad_Session_Game_Results_Bool_Exp>;
};

/** Ordering options when selecting data from "toad.session_game_results". */
export type Toad_Session_Game_Results_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  result?: InputMaybe<Toad_Session_Games_Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: toad.session_game_results */
export type Toad_Session_Game_Results_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "toad.session_game_results" */
export enum Toad_Session_Game_Results_Select_Column {
  /** column name */
  Attempts = 'attempts',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
  /** column name */
  SessionGameId = 'session_game_id'
}

/** order by stddev() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Stddev_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Stddev_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Stddev_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "toad_session_game_results" */
export type Toad_Session_Game_Results_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Toad_Session_Game_Results_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Toad_Session_Game_Results_Stream_Cursor_Value_Input = {
  attempts?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  session_game_id?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Sum_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** placeholder for update columns of table "toad.session_game_results" (current role has no relevant permissions) */
export enum Toad_Session_Game_Results_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

export type Toad_Session_Game_Results_Updates = {
  /** filter the rows which have to be updated */
  where: Toad_Session_Game_Results_Bool_Exp;
};

/** order by var_pop() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Var_Pop_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Var_Samp_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "toad.session_game_results" */
export type Toad_Session_Game_Results_Variance_Order_By = {
  attempts?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  level?: InputMaybe<Order_By>;
  session_game_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "toad.session_games" */
export type Toad_Session_Games = {
  __typename?: 'toad_session_games';
  duration: Scalars['Int']['output'];
  game_id: Scalars['uuid']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  position?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  results: Array<Toad_Session_Game_Results>;
  /** An object relationship */
  session: Toad_Sessions;
  session_id: Scalars['uuid']['output'];
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "toad.session_games" */
export type Toad_Session_GamesResultsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Game_Results_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Game_Results_Order_By>>;
  where?: InputMaybe<Toad_Session_Game_Results_Bool_Exp>;
};

/** aggregated selection of "toad.session_games" */
export type Toad_Session_Games_Aggregate = {
  __typename?: 'toad_session_games_aggregate';
  aggregate?: Maybe<Toad_Session_Games_Aggregate_Fields>;
  nodes: Array<Toad_Session_Games>;
};

export type Toad_Session_Games_Aggregate_Bool_Exp = {
  count?: InputMaybe<Toad_Session_Games_Aggregate_Bool_Exp_Count>;
};

export type Toad_Session_Games_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Toad_Session_Games_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "toad.session_games" */
export type Toad_Session_Games_Aggregate_Fields = {
  __typename?: 'toad_session_games_aggregate_fields';
  avg?: Maybe<Toad_Session_Games_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Toad_Session_Games_Max_Fields>;
  min?: Maybe<Toad_Session_Games_Min_Fields>;
  stddev?: Maybe<Toad_Session_Games_Stddev_Fields>;
  stddev_pop?: Maybe<Toad_Session_Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Toad_Session_Games_Stddev_Samp_Fields>;
  sum?: Maybe<Toad_Session_Games_Sum_Fields>;
  var_pop?: Maybe<Toad_Session_Games_Var_Pop_Fields>;
  var_samp?: Maybe<Toad_Session_Games_Var_Samp_Fields>;
  variance?: Maybe<Toad_Session_Games_Variance_Fields>;
};


/** aggregate fields of "toad.session_games" */
export type Toad_Session_Games_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "toad.session_games" */
export type Toad_Session_Games_Aggregate_Order_By = {
  avg?: InputMaybe<Toad_Session_Games_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Toad_Session_Games_Max_Order_By>;
  min?: InputMaybe<Toad_Session_Games_Min_Order_By>;
  stddev?: InputMaybe<Toad_Session_Games_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Toad_Session_Games_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Toad_Session_Games_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Toad_Session_Games_Sum_Order_By>;
  var_pop?: InputMaybe<Toad_Session_Games_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Toad_Session_Games_Var_Samp_Order_By>;
  variance?: InputMaybe<Toad_Session_Games_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "toad.session_games" */
export type Toad_Session_Games_Arr_Rel_Insert_Input = {
  data: Array<Toad_Session_Games_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Toad_Session_Games_On_Conflict>;
};

/** aggregate avg on columns */
export type Toad_Session_Games_Avg_Fields = {
  __typename?: 'toad_session_games_avg_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "toad.session_games" */
export type Toad_Session_Games_Avg_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "toad.session_games". All fields are combined with a logical 'AND'. */
export type Toad_Session_Games_Bool_Exp = {
  _and?: InputMaybe<Array<Toad_Session_Games_Bool_Exp>>;
  _not?: InputMaybe<Toad_Session_Games_Bool_Exp>;
  _or?: InputMaybe<Array<Toad_Session_Games_Bool_Exp>>;
  duration?: InputMaybe<Int_Comparison_Exp>;
  game_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  points?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
  results?: InputMaybe<Toad_Session_Game_Results_Bool_Exp>;
  session?: InputMaybe<Toad_Sessions_Bool_Exp>;
  session_id?: InputMaybe<Uuid_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "toad.session_games" */
export enum Toad_Session_Games_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionGamesPkey = 'session_games_pkey'
}

/** input type for inserting data into table "toad.session_games" */
export type Toad_Session_Games_Insert_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  results?: InputMaybe<Toad_Session_Game_Results_Arr_Rel_Insert_Input>;
  session?: InputMaybe<Toad_Sessions_Obj_Rel_Insert_Input>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Toad_Session_Games_Max_Fields = {
  __typename?: 'toad_session_games_max_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "toad.session_games" */
export type Toad_Session_Games_Max_Order_By = {
  duration?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Toad_Session_Games_Min_Fields = {
  __typename?: 'toad_session_games_min_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  game_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
  session_id?: Maybe<Scalars['uuid']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "toad.session_games" */
export type Toad_Session_Games_Min_Order_By = {
  duration?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  session_id?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "toad.session_games" */
export type Toad_Session_Games_Mutation_Response = {
  __typename?: 'toad_session_games_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Toad_Session_Games>;
};

/** input type for inserting object relation for remote table "toad.session_games" */
export type Toad_Session_Games_Obj_Rel_Insert_Input = {
  data: Toad_Session_Games_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Toad_Session_Games_On_Conflict>;
};

/** on_conflict condition type for table "toad.session_games" */
export type Toad_Session_Games_On_Conflict = {
  constraint: Toad_Session_Games_Constraint;
  update_columns?: Array<Toad_Session_Games_Update_Column>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};

/** Ordering options when selecting data from "toad.session_games". */
export type Toad_Session_Games_Order_By = {
  duration?: InputMaybe<Order_By>;
  game_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
  results_aggregate?: InputMaybe<Toad_Session_Game_Results_Aggregate_Order_By>;
  session?: InputMaybe<Toad_Sessions_Order_By>;
  session_id?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: toad.session_games */
export type Toad_Session_Games_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "toad.session_games" */
export enum Toad_Session_Games_Select_Column {
  /** column name */
  Duration = 'duration',
  /** column name */
  GameId = 'game_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Points = 'points',
  /** column name */
  Position = 'position',
  /** column name */
  SessionId = 'session_id',
  /** column name */
  StartedAt = 'started_at'
}

/** input type for updating data in table "toad.session_games" */
export type Toad_Session_Games_Set_Input = {
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Toad_Session_Games_Stddev_Fields = {
  __typename?: 'toad_session_games_stddev_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "toad.session_games" */
export type Toad_Session_Games_Stddev_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Toad_Session_Games_Stddev_Pop_Fields = {
  __typename?: 'toad_session_games_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "toad.session_games" */
export type Toad_Session_Games_Stddev_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Toad_Session_Games_Stddev_Samp_Fields = {
  __typename?: 'toad_session_games_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "toad.session_games" */
export type Toad_Session_Games_Stddev_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "toad_session_games" */
export type Toad_Session_Games_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Toad_Session_Games_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Toad_Session_Games_Stream_Cursor_Value_Input = {
  duration?: InputMaybe<Scalars['Int']['input']>;
  game_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  position?: InputMaybe<Scalars['Int']['input']>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Toad_Session_Games_Sum_Fields = {
  __typename?: 'toad_session_games_sum_fields';
  duration?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  position?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "toad.session_games" */
export type Toad_Session_Games_Sum_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** update columns of table "toad.session_games" */
export enum Toad_Session_Games_Update_Column {
  /** column name */
  StartedAt = 'started_at'
}

export type Toad_Session_Games_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Toad_Session_Games_Set_Input>;
  /** filter the rows which have to be updated */
  where: Toad_Session_Games_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Toad_Session_Games_Var_Pop_Fields = {
  __typename?: 'toad_session_games_var_pop_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "toad.session_games" */
export type Toad_Session_Games_Var_Pop_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Toad_Session_Games_Var_Samp_Fields = {
  __typename?: 'toad_session_games_var_samp_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "toad.session_games" */
export type Toad_Session_Games_Var_Samp_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Toad_Session_Games_Variance_Fields = {
  __typename?: 'toad_session_games_variance_fields';
  duration?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  position?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "toad.session_games" */
export type Toad_Session_Games_Variance_Order_By = {
  duration?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  points?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "toad.sessions" */
export type Toad_Sessions = {
  __typename?: 'toad_sessions';
  allowed_attempts: Scalars['Int']['output'];
  attempts: Scalars['jsonb']['output'];
  /** An object relationship */
  campaign: Toad_Campaigns;
  campaign_id: Scalars['uuid']['output'];
  /** An object relationship */
  candidate?: Maybe<User>;
  candidate_id?: Maybe<Scalars['Int']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  games: Array<Toad_Session_Games>;
  /** An aggregate relationship */
  games_aggregate: Toad_Session_Games_Aggregate;
  id: Scalars['uuid']['output'];
  instructions?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};


/** columns and relationships of "toad.sessions" */
export type Toad_SessionsAttemptsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "toad.sessions" */
export type Toad_SessionsGamesArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Games_Order_By>>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};


/** columns and relationships of "toad.sessions" */
export type Toad_SessionsGames_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Session_Games_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Session_Games_Order_By>>;
  where?: InputMaybe<Toad_Session_Games_Bool_Exp>;
};

/** aggregated selection of "toad.sessions" */
export type Toad_Sessions_Aggregate = {
  __typename?: 'toad_sessions_aggregate';
  aggregate?: Maybe<Toad_Sessions_Aggregate_Fields>;
  nodes: Array<Toad_Sessions>;
};

export type Toad_Sessions_Aggregate_Bool_Exp = {
  count?: InputMaybe<Toad_Sessions_Aggregate_Bool_Exp_Count>;
};

export type Toad_Sessions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Toad_Sessions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "toad.sessions" */
export type Toad_Sessions_Aggregate_Fields = {
  __typename?: 'toad_sessions_aggregate_fields';
  avg?: Maybe<Toad_Sessions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Toad_Sessions_Max_Fields>;
  min?: Maybe<Toad_Sessions_Min_Fields>;
  stddev?: Maybe<Toad_Sessions_Stddev_Fields>;
  stddev_pop?: Maybe<Toad_Sessions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Toad_Sessions_Stddev_Samp_Fields>;
  sum?: Maybe<Toad_Sessions_Sum_Fields>;
  var_pop?: Maybe<Toad_Sessions_Var_Pop_Fields>;
  var_samp?: Maybe<Toad_Sessions_Var_Samp_Fields>;
  variance?: Maybe<Toad_Sessions_Variance_Fields>;
};


/** aggregate fields of "toad.sessions" */
export type Toad_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "toad.sessions" */
export type Toad_Sessions_Aggregate_Order_By = {
  avg?: InputMaybe<Toad_Sessions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Toad_Sessions_Max_Order_By>;
  min?: InputMaybe<Toad_Sessions_Min_Order_By>;
  stddev?: InputMaybe<Toad_Sessions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Toad_Sessions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Toad_Sessions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Toad_Sessions_Sum_Order_By>;
  var_pop?: InputMaybe<Toad_Sessions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Toad_Sessions_Var_Samp_Order_By>;
  variance?: InputMaybe<Toad_Sessions_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Toad_Sessions_Append_Input = {
  attempts?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Toad_Sessions_Avg_Fields = {
  __typename?: 'toad_sessions_avg_fields';
  allowed_attempts?: Maybe<Scalars['Float']['output']>;
  candidate_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "toad.sessions" */
export type Toad_Sessions_Avg_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "toad.sessions". All fields are combined with a logical 'AND'. */
export type Toad_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<Toad_Sessions_Bool_Exp>>;
  _not?: InputMaybe<Toad_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<Toad_Sessions_Bool_Exp>>;
  allowed_attempts?: InputMaybe<Int_Comparison_Exp>;
  attempts?: InputMaybe<Jsonb_Comparison_Exp>;
  campaign?: InputMaybe<Toad_Campaigns_Bool_Exp>;
  campaign_id?: InputMaybe<Uuid_Comparison_Exp>;
  candidate?: InputMaybe<User_Bool_Exp>;
  candidate_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  games?: InputMaybe<Toad_Session_Games_Bool_Exp>;
  games_aggregate?: InputMaybe<Toad_Session_Games_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  instructions?: InputMaybe<String_Comparison_Exp>;
  started_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "toad.sessions" */
export enum Toad_Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsPkey = 'sessions_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Toad_Sessions_Delete_At_Path_Input = {
  attempts?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Toad_Sessions_Delete_Elem_Input = {
  attempts?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Toad_Sessions_Delete_Key_Input = {
  attempts?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "toad.sessions" */
export type Toad_Sessions_Inc_Input = {
  allowed_attempts?: InputMaybe<Scalars['Int']['input']>;
  final_score?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "toad.sessions" */
export type Toad_Sessions_Insert_Input = {
  allowed_attempts?: InputMaybe<Scalars['Int']['input']>;
  attempts?: InputMaybe<Scalars['jsonb']['input']>;
  campaign_id?: InputMaybe<Scalars['uuid']['input']>;
  candidate_id?: InputMaybe<Scalars['Int']['input']>;
  games?: InputMaybe<Toad_Session_Games_Arr_Rel_Insert_Input>;
  instructions?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Toad_Sessions_Max_Fields = {
  __typename?: 'toad_sessions_max_fields';
  allowed_attempts?: Maybe<Scalars['Int']['output']>;
  campaign_id?: Maybe<Scalars['uuid']['output']>;
  candidate_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "toad.sessions" */
export type Toad_Sessions_Max_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Toad_Sessions_Min_Fields = {
  __typename?: 'toad_sessions_min_fields';
  allowed_attempts?: Maybe<Scalars['Int']['output']>;
  campaign_id?: Maybe<Scalars['uuid']['output']>;
  candidate_id?: Maybe<Scalars['Int']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  instructions?: Maybe<Scalars['String']['output']>;
  started_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "toad.sessions" */
export type Toad_Sessions_Min_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "toad.sessions" */
export type Toad_Sessions_Mutation_Response = {
  __typename?: 'toad_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Toad_Sessions>;
};

/** input type for inserting object relation for remote table "toad.sessions" */
export type Toad_Sessions_Obj_Rel_Insert_Input = {
  data: Toad_Sessions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Toad_Sessions_On_Conflict>;
};

/** on_conflict condition type for table "toad.sessions" */
export type Toad_Sessions_On_Conflict = {
  constraint: Toad_Sessions_Constraint;
  update_columns?: Array<Toad_Sessions_Update_Column>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "toad.sessions". */
export type Toad_Sessions_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  attempts?: InputMaybe<Order_By>;
  campaign?: InputMaybe<Toad_Campaigns_Order_By>;
  campaign_id?: InputMaybe<Order_By>;
  candidate?: InputMaybe<User_Order_By>;
  candidate_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  games_aggregate?: InputMaybe<Toad_Session_Games_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  instructions?: InputMaybe<Order_By>;
  started_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: toad.sessions */
export type Toad_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Toad_Sessions_Prepend_Input = {
  attempts?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "toad.sessions" */
export enum Toad_Sessions_Select_Column {
  /** column name */
  AllowedAttempts = 'allowed_attempts',
  /** column name */
  Attempts = 'attempts',
  /** column name */
  CampaignId = 'campaign_id',
  /** column name */
  CandidateId = 'candidate_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Instructions = 'instructions',
  /** column name */
  StartedAt = 'started_at'
}

/** input type for updating data in table "toad.sessions" */
export type Toad_Sessions_Set_Input = {
  allowed_attempts?: InputMaybe<Scalars['Int']['input']>;
  attempts?: InputMaybe<Scalars['jsonb']['input']>;
  final_score?: InputMaybe<Scalars['numeric']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Toad_Sessions_Stddev_Fields = {
  __typename?: 'toad_sessions_stddev_fields';
  allowed_attempts?: Maybe<Scalars['Float']['output']>;
  candidate_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "toad.sessions" */
export type Toad_Sessions_Stddev_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Toad_Sessions_Stddev_Pop_Fields = {
  __typename?: 'toad_sessions_stddev_pop_fields';
  allowed_attempts?: Maybe<Scalars['Float']['output']>;
  candidate_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "toad.sessions" */
export type Toad_Sessions_Stddev_Pop_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Toad_Sessions_Stddev_Samp_Fields = {
  __typename?: 'toad_sessions_stddev_samp_fields';
  allowed_attempts?: Maybe<Scalars['Float']['output']>;
  candidate_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "toad.sessions" */
export type Toad_Sessions_Stddev_Samp_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "toad_sessions" */
export type Toad_Sessions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Toad_Sessions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Toad_Sessions_Stream_Cursor_Value_Input = {
  allowed_attempts?: InputMaybe<Scalars['Int']['input']>;
  attempts?: InputMaybe<Scalars['jsonb']['input']>;
  campaign_id?: InputMaybe<Scalars['uuid']['input']>;
  candidate_id?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  instructions?: InputMaybe<Scalars['String']['input']>;
  started_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Toad_Sessions_Sum_Fields = {
  __typename?: 'toad_sessions_sum_fields';
  allowed_attempts?: Maybe<Scalars['Int']['output']>;
  candidate_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "toad.sessions" */
export type Toad_Sessions_Sum_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "toad.sessions_to_send". All fields are combined with a logical 'AND'. */
export type Toad_Sessions_To_Send_Bool_Exp = {
  _and?: InputMaybe<Array<Toad_Sessions_To_Send_Bool_Exp>>;
  _not?: InputMaybe<Toad_Sessions_To_Send_Bool_Exp>;
  _or?: InputMaybe<Array<Toad_Sessions_To_Send_Bool_Exp>>;
};

/** unique or primary key constraints on table "toad.sessions_to_send" */
export enum Toad_Sessions_To_Send_Constraint {
  /** unique or primary key constraint on columns "id" */
  SessionsToSendPkey = 'sessions_to_send_pkey',
  /** unique or primary key constraint on columns "session_id" */
  SessionsToSendSessionIdKey = 'sessions_to_send_session_id_key'
}

/** input type for inserting data into table "toad.sessions_to_send" */
export type Toad_Sessions_To_Send_Insert_Input = {
  ended_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  session?: InputMaybe<Toad_Sessions_Obj_Rel_Insert_Input>;
  session_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** response of any mutation on the table "toad.sessions_to_send" */
export type Toad_Sessions_To_Send_Mutation_Response = {
  __typename?: 'toad_sessions_to_send_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
};

/** on_conflict condition type for table "toad.sessions_to_send" */
export type Toad_Sessions_To_Send_On_Conflict = {
  constraint: Toad_Sessions_To_Send_Constraint;
  update_columns?: Array<Toad_Sessions_To_Send_Update_Column>;
  where?: InputMaybe<Toad_Sessions_To_Send_Bool_Exp>;
};

/** placeholder for update columns of table "toad.sessions_to_send" (current role has no relevant permissions) */
export enum Toad_Sessions_To_Send_Update_Column {
  /** placeholder (do not use) */
  Placeholder = '_PLACEHOLDER'
}

export type Toad_Sessions_To_Send_Updates = {
  /** filter the rows which have to be updated */
  where: Toad_Sessions_To_Send_Bool_Exp;
};

/** update columns of table "toad.sessions" */
export enum Toad_Sessions_Update_Column {
  /** column name */
  AllowedAttempts = 'allowed_attempts',
  /** column name */
  Attempts = 'attempts',
  /** column name */
  FinalScore = 'final_score',
  /** column name */
  StartedAt = 'started_at'
}

export type Toad_Sessions_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Toad_Sessions_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Toad_Sessions_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Toad_Sessions_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Toad_Sessions_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Toad_Sessions_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Toad_Sessions_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Toad_Sessions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Toad_Sessions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Toad_Sessions_Var_Pop_Fields = {
  __typename?: 'toad_sessions_var_pop_fields';
  allowed_attempts?: Maybe<Scalars['Float']['output']>;
  candidate_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "toad.sessions" */
export type Toad_Sessions_Var_Pop_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Toad_Sessions_Var_Samp_Fields = {
  __typename?: 'toad_sessions_var_samp_fields';
  allowed_attempts?: Maybe<Scalars['Float']['output']>;
  candidate_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "toad.sessions" */
export type Toad_Sessions_Var_Samp_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Toad_Sessions_Variance_Fields = {
  __typename?: 'toad_sessions_variance_fields';
  allowed_attempts?: Maybe<Scalars['Float']['output']>;
  candidate_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "toad.sessions" */
export type Toad_Sessions_Variance_Order_By = {
  allowed_attempts?: InputMaybe<Order_By>;
  candidate_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  amount: Scalars['numeric']['output'];
  attrs: Scalars['jsonb']['output'];
  campus?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  /** An object relationship */
  event?: Maybe<Event>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id: Scalars['Int']['output'];
  invalidatedAt?: Maybe<Scalars['timestamptz']['output']>;
  invalidationReason?: Maybe<Scalars['String']['output']>;
  isBonus: Scalars['Boolean']['output'];
  /** An object relationship */
  object?: Maybe<Object>;
  objectId: Scalars['Int']['output'];
  /** An object relationship */
  originEvent?: Maybe<Event>;
  originEventId?: Maybe<Scalars['Int']['output']>;
  path: Scalars['String']['output'];
  /** An object relationship */
  pathByPath: Path;
  /** An object relationship */
  progress?: Maybe<Progress>;
  /** An object relationship */
  transaction_type: Transaction_Type;
  type: Scalars['String']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int']['output'];
  userLogin?: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "transaction" */
export type TransactionAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

export type Transaction_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Transaction_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Transaction_Aggregate_Bool_Exp_Count>;
};

export type Transaction_Aggregate_Bool_Exp_Bool_And = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Transaction_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Transaction_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  originEventId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  eventId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  invalidatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  invalidationReason?: InputMaybe<String_Comparison_Exp>;
  isBonus?: InputMaybe<Boolean_Comparison_Exp>;
  object?: InputMaybe<Object_Bool_Exp>;
  objectId?: InputMaybe<Int_Comparison_Exp>;
  originEvent?: InputMaybe<Event_Bool_Exp>;
  originEventId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  progress?: InputMaybe<Progress_Bool_Exp>;
  transaction_type?: InputMaybe<Transaction_Type_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
  userLogin?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invalidatedAt?: Maybe<Scalars['timestamptz']['output']>;
  invalidationReason?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  originEventId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invalidatedAt?: InputMaybe<Order_By>;
  invalidationReason?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  invalidatedAt?: Maybe<Scalars['timestamptz']['output']>;
  invalidationReason?: Maybe<Scalars['String']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  originEventId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
  userLogin?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invalidatedAt?: InputMaybe<Order_By>;
  invalidationReason?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  amount?: InputMaybe<Order_By>;
  attrs?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invalidatedAt?: InputMaybe<Order_By>;
  invalidationReason?: InputMaybe<Order_By>;
  isBonus?: InputMaybe<Order_By>;
  object?: InputMaybe<Object_Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEvent?: InputMaybe<Event_Order_By>;
  originEventId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  progress?: InputMaybe<Progress_Order_By>;
  transaction_type?: InputMaybe<Transaction_Type_Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
  userLogin?: InputMaybe<Order_By>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Attrs = 'attrs',
  /** column name */
  Campus = 'campus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EventId = 'eventId',
  /** column name */
  Id = 'id',
  /** column name */
  InvalidatedAt = 'invalidatedAt',
  /** column name */
  InvalidationReason = 'invalidationReason',
  /** column name */
  IsBonus = 'isBonus',
  /** column name */
  ObjectId = 'objectId',
  /** column name */
  OriginEventId = 'originEventId',
  /** column name */
  Path = 'path',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** select "transaction_aggregate_bool_exp_bool_and_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsBonus = 'isBonus'
}

/** select "transaction_aggregate_bool_exp_bool_or_arguments_columns" columns of table "transaction" */
export enum Transaction_Select_Column_Transaction_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsBonus = 'isBonus'
}

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  originEventId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  originEventId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  originEventId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "transaction" */
export type Transaction_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  campus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  eventId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  invalidatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  invalidationReason?: InputMaybe<Scalars['String']['input']>;
  isBonus?: InputMaybe<Scalars['Boolean']['input']>;
  objectId?: InputMaybe<Scalars['Int']['input']>;
  originEventId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  amount?: Maybe<Scalars['numeric']['output']>;
  eventId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  objectId?: Maybe<Scalars['Int']['output']>;
  originEventId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction_type" */
export type Transaction_Type = {
  __typename?: 'transaction_type';
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  type: Scalars['String']['output'];
};


/** columns and relationships of "transaction_type" */
export type Transaction_TypeTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "transaction_type" */
export type Transaction_TypeTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "transaction_type" */
export type Transaction_Type_Aggregate = {
  __typename?: 'transaction_type_aggregate';
  aggregate?: Maybe<Transaction_Type_Aggregate_Fields>;
  nodes: Array<Transaction_Type>;
};

/** aggregate fields of "transaction_type" */
export type Transaction_Type_Aggregate_Fields = {
  __typename?: 'transaction_type_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Transaction_Type_Max_Fields>;
  min?: Maybe<Transaction_Type_Min_Fields>;
};


/** aggregate fields of "transaction_type" */
export type Transaction_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "transaction_type". All fields are combined with a logical 'AND'. */
export type Transaction_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Type_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Type_Bool_Exp>>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
};

/** aggregate max on columns */
export type Transaction_Type_Max_Fields = {
  __typename?: 'transaction_type_max_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Transaction_Type_Min_Fields = {
  __typename?: 'transaction_type_min_fields';
  type?: Maybe<Scalars['String']['output']>;
};

/** Ordering options when selecting data from "transaction_type". */
export type Transaction_Type_Order_By = {
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
};

/** select columns of table "transaction_type" */
export enum Transaction_Type_Select_Column {
  /** column name */
  Type = 'type'
}

/** Streaming cursor of the table "transaction_type" */
export type Transaction_Type_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Transaction_Type_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Transaction_Type_Stream_Cursor_Value_Input = {
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  originEventId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  originEventId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  amount?: Maybe<Scalars['Float']['output']>;
  eventId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  objectId?: Maybe<Scalars['Float']['output']>;
  originEventId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  eventId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  objectId?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  attrs: Scalars['jsonb']['output'];
  auditRatio?: Maybe<Scalars['float8']['output']>;
  /** An array relationship */
  audits: Array<Audit>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  /** An aggregate relationship */
  audits_aggregate: Audit_Aggregate;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['timestamptz']['output'];
  discordId?: Maybe<Scalars['String']['output']>;
  discordLogin?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  events: Array<Event_User>;
  /** An aggregate relationship */
  events_aggregate: Event_User_Aggregate;
  firstName?: Maybe<Scalars['String']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  groups: Array<Group_User>;
  /** An array relationship */
  groupsByCaptainid: Array<Group>;
  /** An aggregate relationship */
  groupsByCaptainid_aggregate: Group_Aggregate;
  /** An aggregate relationship */
  groups_aggregate: Group_User_Aggregate;
  id: Scalars['Int']['output'];
  /** An array relationship */
  labels: Array<Label_User>;
  /** An aggregate relationship */
  labels_aggregate: Label_User_Aggregate;
  lastName?: Maybe<Scalars['String']['output']>;
  login: Scalars['String']['output'];
  /** An array relationship */
  markdowns: Array<Markdown>;
  /** An array relationship */
  matches: Array<Match>;
  /** An aggregate relationship */
  matches_aggregate: Match_Aggregate;
  /** An array relationship */
  objectAvailabilities: Array<Object_Availability>;
  /** An aggregate relationship */
  objectAvailabilities_aggregate: Object_Availability_Aggregate;
  /** An array relationship */
  objects: Array<Object>;
  /** An aggregate relationship */
  objects_aggregate: Object_Aggregate;
  profile: Scalars['jsonb']['output'];
  /** An array relationship */
  progresses: Array<Progress>;
  /** An array relationship */
  progressesByPath: Array<Progress_By_Path_View>;
  /** An aggregate relationship */
  progressesByPath_aggregate: Progress_By_Path_View_Aggregate;
  /** An aggregate relationship */
  progresses_aggregate: Progress_Aggregate;
  /** An object relationship */
  public?: Maybe<User_Public_View>;
  /** An array relationship */
  records: Array<Record>;
  /** An array relationship */
  recordsByAuthorid: Array<Record>;
  /** An array relationship */
  registrations: Array<Registration_User>;
  /** An aggregate relationship */
  registrations_aggregate: Registration_User_Aggregate;
  /** An array relationship */
  results: Array<Result>;
  /** An aggregate relationship */
  results_aggregate: Result_Aggregate;
  /** An array relationship */
  roles: Array<User_Roles_View>;
  /** An aggregate relationship */
  roles_aggregate: User_Roles_View_Aggregate;
  /** An array relationship */
  sessions: Array<Toad_Sessions>;
  /** An aggregate relationship */
  sessions_aggregate: Toad_Sessions_Aggregate;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  updatedAt: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_roles: Array<User_Role>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Role_Aggregate;
  /** An array relationship */
  xps: Array<Xp_View>;
};


/** columns and relationships of "user" */
export type UserAttrsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user" */
export type UserAuditsArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserAudits_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Audit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Audit_Order_By>>;
  where?: InputMaybe<Audit_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserEventsArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGroupsArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGroupsByCaptainidArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGroupsByCaptainid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_Order_By>>;
  where?: InputMaybe<Group_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserGroups_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Group_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Group_User_Order_By>>;
  where?: InputMaybe<Group_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserLabelsArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMarkdownsArgs = {
  distinct_on?: InputMaybe<Array<Markdown_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Markdown_Order_By>>;
  where?: InputMaybe<Markdown_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMatchesArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserMatches_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Match_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Match_Order_By>>;
  where?: InputMaybe<Match_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserObjectAvailabilitiesArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserObjectAvailabilities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Availability_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Availability_Order_By>>;
  where?: InputMaybe<Object_Availability_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserObjectsArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserObjects_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Object_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Object_Order_By>>;
  where?: InputMaybe<Object_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserProfileArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user" */
export type UserProgressesArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserProgressesByPathArgs = {
  distinct_on?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_By_Path_View_Order_By>>;
  where?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserProgressesByPath_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_By_Path_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_By_Path_View_Order_By>>;
  where?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserProgresses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Progress_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Progress_Order_By>>;
  where?: InputMaybe<Progress_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRecordsArgs = {
  distinct_on?: InputMaybe<Array<Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Order_By>>;
  where?: InputMaybe<Record_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRecordsByAuthoridArgs = {
  distinct_on?: InputMaybe<Array<Record_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Record_Order_By>>;
  where?: InputMaybe<Record_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRegistrationsArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRegistrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Registration_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Registration_User_Order_By>>;
  where?: InputMaybe<Registration_User_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserResultsArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserResults_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Result_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Result_Order_By>>;
  where?: InputMaybe<Result_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserSessionsArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserSessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Toad_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Toad_Sessions_Order_By>>;
  where?: InputMaybe<Toad_Sessions_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Role_Order_By>>;
  where?: InputMaybe<User_Role_Bool_Exp>;
};


/** columns and relationships of "user" */
export type UserXpsArgs = {
  distinct_on?: InputMaybe<Array<Xp_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Xp_View_Order_By>>;
  where?: InputMaybe<Xp_View_Bool_Exp>;
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type User_Append_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  profile?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  attrs?: InputMaybe<Jsonb_Comparison_Exp>;
  auditRatio?: InputMaybe<Float8_Comparison_Exp>;
  audits?: InputMaybe<Audit_Bool_Exp>;
  auditsAssigned?: InputMaybe<Numeric_Comparison_Exp>;
  audits_aggregate?: InputMaybe<Audit_Aggregate_Bool_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  discordId?: InputMaybe<String_Comparison_Exp>;
  discordLogin?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  events?: InputMaybe<Event_User_Bool_Exp>;
  events_aggregate?: InputMaybe<Event_User_Aggregate_Bool_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  githubId?: InputMaybe<Int_Comparison_Exp>;
  groups?: InputMaybe<Group_User_Bool_Exp>;
  groupsByCaptainid?: InputMaybe<Group_Bool_Exp>;
  groupsByCaptainid_aggregate?: InputMaybe<Group_Aggregate_Bool_Exp>;
  groups_aggregate?: InputMaybe<Group_User_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  labels?: InputMaybe<Label_User_Bool_Exp>;
  labels_aggregate?: InputMaybe<Label_User_Aggregate_Bool_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  login?: InputMaybe<String_Comparison_Exp>;
  markdowns?: InputMaybe<Markdown_Bool_Exp>;
  matches?: InputMaybe<Match_Bool_Exp>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Bool_Exp>;
  objectAvailabilities?: InputMaybe<Object_Availability_Bool_Exp>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Bool_Exp>;
  objects?: InputMaybe<Object_Bool_Exp>;
  objects_aggregate?: InputMaybe<Object_Aggregate_Bool_Exp>;
  profile?: InputMaybe<Jsonb_Comparison_Exp>;
  progresses?: InputMaybe<Progress_Bool_Exp>;
  progressesByPath?: InputMaybe<Progress_By_Path_View_Bool_Exp>;
  progressesByPath_aggregate?: InputMaybe<Progress_By_Path_View_Aggregate_Bool_Exp>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Bool_Exp>;
  public?: InputMaybe<User_Public_View_Bool_Exp>;
  records?: InputMaybe<Record_Bool_Exp>;
  recordsByAuthorid?: InputMaybe<Record_Bool_Exp>;
  registrations?: InputMaybe<Registration_User_Bool_Exp>;
  registrations_aggregate?: InputMaybe<Registration_User_Aggregate_Bool_Exp>;
  results?: InputMaybe<Result_Bool_Exp>;
  results_aggregate?: InputMaybe<Result_Aggregate_Bool_Exp>;
  roles?: InputMaybe<User_Roles_View_Bool_Exp>;
  roles_aggregate?: InputMaybe<User_Roles_View_Aggregate_Bool_Exp>;
  sessions?: InputMaybe<Toad_Sessions_Bool_Exp>;
  sessions_aggregate?: InputMaybe<Toad_Sessions_Aggregate_Bool_Exp>;
  totalDown?: InputMaybe<Numeric_Comparison_Exp>;
  totalUp?: InputMaybe<Numeric_Comparison_Exp>;
  totalUpBonus?: InputMaybe<Numeric_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Role_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Bool_Exp>;
  xps?: InputMaybe<Xp_View_Bool_Exp>;
};

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type User_Delete_At_Path_Input = {
  attrs?: InputMaybe<Array<Scalars['String']['input']>>;
  profile?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type User_Delete_Elem_Input = {
  attrs?: InputMaybe<Scalars['Int']['input']>;
  profile?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type User_Delete_Key_Input = {
  attrs?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  discordId?: Maybe<Scalars['String']['output']>;
  discordLogin?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  discordId?: Maybe<Scalars['String']['output']>;
  discordLogin?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  attrs?: InputMaybe<Order_By>;
  auditRatio?: InputMaybe<Order_By>;
  auditsAssigned?: InputMaybe<Order_By>;
  audits_aggregate?: InputMaybe<Audit_Aggregate_Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  discordId?: InputMaybe<Order_By>;
  discordLogin?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  events_aggregate?: InputMaybe<Event_User_Aggregate_Order_By>;
  firstName?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  groupsByCaptainid_aggregate?: InputMaybe<Group_Aggregate_Order_By>;
  groups_aggregate?: InputMaybe<Group_User_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  labels_aggregate?: InputMaybe<Label_User_Aggregate_Order_By>;
  lastName?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  markdowns_aggregate?: InputMaybe<Markdown_Aggregate_Order_By>;
  matches_aggregate?: InputMaybe<Match_Aggregate_Order_By>;
  objectAvailabilities_aggregate?: InputMaybe<Object_Availability_Aggregate_Order_By>;
  objects_aggregate?: InputMaybe<Object_Aggregate_Order_By>;
  profile?: InputMaybe<Order_By>;
  progressesByPath_aggregate?: InputMaybe<Progress_By_Path_View_Aggregate_Order_By>;
  progresses_aggregate?: InputMaybe<Progress_Aggregate_Order_By>;
  public?: InputMaybe<User_Public_View_Order_By>;
  recordsByAuthorid_aggregate?: InputMaybe<Record_Aggregate_Order_By>;
  records_aggregate?: InputMaybe<Record_Aggregate_Order_By>;
  registrations_aggregate?: InputMaybe<Registration_User_Aggregate_Order_By>;
  results_aggregate?: InputMaybe<Result_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<User_Roles_View_Aggregate_Order_By>;
  sessions_aggregate?: InputMaybe<Toad_Sessions_Aggregate_Order_By>;
  totalDown?: InputMaybe<Order_By>;
  totalUp?: InputMaybe<Order_By>;
  totalUpBonus?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Role_Aggregate_Order_By>;
  xps_aggregate?: InputMaybe<Xp_View_Aggregate_Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type User_Prepend_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  profile?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "user_public_view" */
export type User_Public_View = {
  __typename?: 'user_public_view';
  avatarUrl?: Maybe<Scalars['String']['output']>;
  campus?: Maybe<Scalars['String']['output']>;
  canAccessPlatform?: Maybe<Scalars['Boolean']['output']>;
  canBeAuditor?: Maybe<Scalars['Boolean']['output']>;
  discordId?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  events: Array<Event_User>;
  /** An aggregate relationship */
  events_aggregate: Event_User_Aggregate;
  firstName?: Maybe<Scalars['String']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  /** An array relationship */
  labels: Array<Label_User>;
  /** An aggregate relationship */
  labels_aggregate: Label_User_Aggregate;
  lastName?: Maybe<Scalars['String']['output']>;
  login?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  private?: Maybe<User>;
  profile?: Maybe<Scalars['jsonb']['output']>;
  /** An array relationship */
  roles: Array<User_Roles_View>;
  /** An aggregate relationship */
  roles_aggregate: User_Roles_View_Aggregate;
};


/** columns and relationships of "user_public_view" */
export type User_Public_ViewEventsArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


/** columns and relationships of "user_public_view" */
export type User_Public_ViewEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Event_User_Order_By>>;
  where?: InputMaybe<Event_User_Bool_Exp>;
};


/** columns and relationships of "user_public_view" */
export type User_Public_ViewLabelsArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "user_public_view" */
export type User_Public_ViewLabels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Label_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Label_User_Order_By>>;
  where?: InputMaybe<Label_User_Bool_Exp>;
};


/** columns and relationships of "user_public_view" */
export type User_Public_ViewProfileArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "user_public_view" */
export type User_Public_ViewRolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};


/** columns and relationships of "user_public_view" */
export type User_Public_ViewRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_View_Order_By>>;
  where?: InputMaybe<User_Roles_View_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "user_public_view". All fields are combined with a logical 'AND'. */
export type User_Public_View_Bool_Exp = {
  _and?: InputMaybe<Array<User_Public_View_Bool_Exp>>;
  _not?: InputMaybe<User_Public_View_Bool_Exp>;
  _or?: InputMaybe<Array<User_Public_View_Bool_Exp>>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  campus?: InputMaybe<String_Comparison_Exp>;
  canAccessPlatform?: InputMaybe<Boolean_Comparison_Exp>;
  canBeAuditor?: InputMaybe<Boolean_Comparison_Exp>;
  discordId?: InputMaybe<String_Comparison_Exp>;
  events?: InputMaybe<Event_User_Bool_Exp>;
  events_aggregate?: InputMaybe<Event_User_Aggregate_Bool_Exp>;
  firstName?: InputMaybe<String_Comparison_Exp>;
  githubId?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  labels?: InputMaybe<Label_User_Bool_Exp>;
  labels_aggregate?: InputMaybe<Label_User_Aggregate_Bool_Exp>;
  lastName?: InputMaybe<String_Comparison_Exp>;
  login?: InputMaybe<String_Comparison_Exp>;
  private?: InputMaybe<User_Bool_Exp>;
  profile?: InputMaybe<Jsonb_Comparison_Exp>;
  roles?: InputMaybe<User_Roles_View_Bool_Exp>;
  roles_aggregate?: InputMaybe<User_Roles_View_Aggregate_Bool_Exp>;
};

/** Ordering options when selecting data from "user_public_view". */
export type User_Public_View_Order_By = {
  avatarUrl?: InputMaybe<Order_By>;
  campus?: InputMaybe<Order_By>;
  canAccessPlatform?: InputMaybe<Order_By>;
  canBeAuditor?: InputMaybe<Order_By>;
  discordId?: InputMaybe<Order_By>;
  events_aggregate?: InputMaybe<Event_User_Aggregate_Order_By>;
  firstName?: InputMaybe<Order_By>;
  githubId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  labels_aggregate?: InputMaybe<Label_User_Aggregate_Order_By>;
  lastName?: InputMaybe<Order_By>;
  login?: InputMaybe<Order_By>;
  private?: InputMaybe<User_Order_By>;
  profile?: InputMaybe<Order_By>;
  roles_aggregate?: InputMaybe<User_Roles_View_Aggregate_Order_By>;
};

/** select columns of table "user_public_view" */
export enum User_Public_View_Select_Column {
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Campus = 'campus',
  /** column name */
  CanAccessPlatform = 'canAccessPlatform',
  /** column name */
  CanBeAuditor = 'canBeAuditor',
  /** column name */
  DiscordId = 'discordId',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GithubId = 'githubId',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Login = 'login',
  /** column name */
  Profile = 'profile'
}

/** Streaming cursor of the table "user_public_view" */
export type User_Public_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Public_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Public_View_Stream_Cursor_Value_Input = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  campus?: InputMaybe<Scalars['String']['input']>;
  canAccessPlatform?: InputMaybe<Scalars['Boolean']['input']>;
  canBeAuditor?: InputMaybe<Scalars['Boolean']['input']>;
  discordId?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "user_role" */
export type User_Role = {
  __typename?: 'user_role';
  id: Scalars['Int']['output'];
  /** An object relationship */
  role: Role;
  roleId: Scalars['Int']['output'];
  /** An object relationship */
  user: User;
  userId: Scalars['Int']['output'];
};

/** aggregated selection of "user_role" */
export type User_Role_Aggregate = {
  __typename?: 'user_role_aggregate';
  aggregate?: Maybe<User_Role_Aggregate_Fields>;
  nodes: Array<User_Role>;
};

export type User_Role_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Role_Aggregate_Bool_Exp_Count>;
};

export type User_Role_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Role_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_role" */
export type User_Role_Aggregate_Fields = {
  __typename?: 'user_role_aggregate_fields';
  avg?: Maybe<User_Role_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Role_Max_Fields>;
  min?: Maybe<User_Role_Min_Fields>;
  stddev?: Maybe<User_Role_Stddev_Fields>;
  stddev_pop?: Maybe<User_Role_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Role_Stddev_Samp_Fields>;
  sum?: Maybe<User_Role_Sum_Fields>;
  var_pop?: Maybe<User_Role_Var_Pop_Fields>;
  var_samp?: Maybe<User_Role_Var_Samp_Fields>;
  variance?: Maybe<User_Role_Variance_Fields>;
};


/** aggregate fields of "user_role" */
export type User_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_role" */
export type User_Role_Aggregate_Order_By = {
  avg?: InputMaybe<User_Role_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Role_Max_Order_By>;
  min?: InputMaybe<User_Role_Min_Order_By>;
  stddev?: InputMaybe<User_Role_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Role_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Role_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Role_Sum_Order_By>;
  var_pop?: InputMaybe<User_Role_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Role_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Role_Variance_Order_By>;
};

/** aggregate avg on columns */
export type User_Role_Avg_Fields = {
  __typename?: 'user_role_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_role" */
export type User_Role_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_role". All fields are combined with a logical 'AND'. */
export type User_Role_Bool_Exp = {
  _and?: InputMaybe<Array<User_Role_Bool_Exp>>;
  _not?: InputMaybe<User_Role_Bool_Exp>;
  _or?: InputMaybe<Array<User_Role_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<Role_Bool_Exp>;
  roleId?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Role_Max_Fields = {
  __typename?: 'user_role_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_role" */
export type User_Role_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Role_Min_Fields = {
  __typename?: 'user_role_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_role" */
export type User_Role_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "user_role". */
export type User_Role_Order_By = {
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Role_Order_By>;
  roleId?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "user_role" */
export enum User_Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'roleId',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type User_Role_Stddev_Fields = {
  __typename?: 'user_role_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_role" */
export type User_Role_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Role_Stddev_Pop_Fields = {
  __typename?: 'user_role_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_role" */
export type User_Role_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Role_Stddev_Samp_Fields = {
  __typename?: 'user_role_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_role" */
export type User_Role_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_role" */
export type User_Role_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Role_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Role_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Role_Sum_Fields = {
  __typename?: 'user_role_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  roleId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_role" */
export type User_Role_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type User_Role_Var_Pop_Fields = {
  __typename?: 'user_role_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_role" */
export type User_Role_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Role_Var_Samp_Fields = {
  __typename?: 'user_role_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_role" */
export type User_Role_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Role_Variance_Fields = {
  __typename?: 'user_role_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  roleId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_role" */
export type User_Role_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  roleId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_roles_view" */
export type User_Roles_View = {
  __typename?: 'user_roles_view';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** aggregated selection of "user_roles_view" */
export type User_Roles_View_Aggregate = {
  __typename?: 'user_roles_view_aggregate';
  aggregate?: Maybe<User_Roles_View_Aggregate_Fields>;
  nodes: Array<User_Roles_View>;
};

export type User_Roles_View_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Roles_View_Aggregate_Bool_Exp_Count>;
};

export type User_Roles_View_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Roles_View_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_roles_view" */
export type User_Roles_View_Aggregate_Fields = {
  __typename?: 'user_roles_view_aggregate_fields';
  avg?: Maybe<User_Roles_View_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Roles_View_Max_Fields>;
  min?: Maybe<User_Roles_View_Min_Fields>;
  stddev?: Maybe<User_Roles_View_Stddev_Fields>;
  stddev_pop?: Maybe<User_Roles_View_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Roles_View_Stddev_Samp_Fields>;
  sum?: Maybe<User_Roles_View_Sum_Fields>;
  var_pop?: Maybe<User_Roles_View_Var_Pop_Fields>;
  var_samp?: Maybe<User_Roles_View_Var_Samp_Fields>;
  variance?: Maybe<User_Roles_View_Variance_Fields>;
};


/** aggregate fields of "user_roles_view" */
export type User_Roles_View_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_View_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_roles_view" */
export type User_Roles_View_Aggregate_Order_By = {
  avg?: InputMaybe<User_Roles_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Roles_View_Max_Order_By>;
  min?: InputMaybe<User_Roles_View_Min_Order_By>;
  stddev?: InputMaybe<User_Roles_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Roles_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Roles_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Roles_View_Sum_Order_By>;
  var_pop?: InputMaybe<User_Roles_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Roles_View_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Roles_View_Variance_Order_By>;
};

/** aggregate avg on columns */
export type User_Roles_View_Avg_Fields = {
  __typename?: 'user_roles_view_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_roles_view" */
export type User_Roles_View_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_roles_view". All fields are combined with a logical 'AND'. */
export type User_Roles_View_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_View_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_View_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_View_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** aggregate max on columns */
export type User_Roles_View_Max_Fields = {
  __typename?: 'user_roles_view_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_roles_view" */
export type User_Roles_View_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_View_Min_Fields = {
  __typename?: 'user_roles_view_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['timestamptz']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_roles_view" */
export type User_Roles_View_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "user_roles_view". */
export type User_Roles_View_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  slug?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "user_roles_view" */
export enum User_Roles_View_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** aggregate stddev on columns */
export type User_Roles_View_Stddev_Fields = {
  __typename?: 'user_roles_view_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_roles_view" */
export type User_Roles_View_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Roles_View_Stddev_Pop_Fields = {
  __typename?: 'user_roles_view_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_roles_view" */
export type User_Roles_View_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Roles_View_Stddev_Samp_Fields = {
  __typename?: 'user_roles_view_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_roles_view" */
export type User_Roles_View_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_roles_view" */
export type User_Roles_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Roles_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Roles_View_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Roles_View_Sum_Fields = {
  __typename?: 'user_roles_view_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_roles_view" */
export type User_Roles_View_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type User_Roles_View_Var_Pop_Fields = {
  __typename?: 'user_roles_view_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_roles_view" */
export type User_Roles_View_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Roles_View_Var_Samp_Fields = {
  __typename?: 'user_roles_view_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_roles_view" */
export type User_Roles_View_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Roles_View_Variance_Fields = {
  __typename?: 'user_roles_view_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_roles_view" */
export type User_Roles_View_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Attrs = 'attrs',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  Campus = 'campus',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DiscordId = 'discordId',
  /** column name */
  DiscordLogin = 'discordLogin',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'firstName',
  /** column name */
  GithubId = 'githubId',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'lastName',
  /** column name */
  Login = 'login',
  /** column name */
  Profile = 'profile',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

/** Streaming cursor of the table "user" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  attrs?: InputMaybe<Scalars['jsonb']['input']>;
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  campus?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['timestamptz']['input']>;
  discordId?: InputMaybe<Scalars['String']['input']>;
  discordLogin?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  githubId?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  login?: InputMaybe<Scalars['String']['input']>;
  profile?: InputMaybe<Scalars['jsonb']['input']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

export type User_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<User_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<User_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<User_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<User_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<User_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  auditRatio?: Maybe<Scalars['float8']['output']>;
  auditsAssigned?: Maybe<Scalars['numeric']['output']>;
  githubId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  totalDown?: Maybe<Scalars['numeric']['output']>;
  totalUp?: Maybe<Scalars['numeric']['output']>;
  /** A computed field, executes function "user_total_bonus" */
  totalUpBonus?: Maybe<Scalars['numeric']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "xp_view" */
export type Xp_View = {
  __typename?: 'xp_view';
  amount?: Maybe<Scalars['numeric']['output']>;
  /** An object relationship */
  event?: Maybe<Event>;
  originEventId?: Maybe<Scalars['Int']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  pathByPath?: Maybe<Path>;
  /** An object relationship */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['Int']['output']>;
};

/** order by aggregate values of table "xp_view" */
export type Xp_View_Aggregate_Order_By = {
  avg?: InputMaybe<Xp_View_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xp_View_Max_Order_By>;
  min?: InputMaybe<Xp_View_Min_Order_By>;
  stddev?: InputMaybe<Xp_View_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Xp_View_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Xp_View_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Xp_View_Sum_Order_By>;
  var_pop?: InputMaybe<Xp_View_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Xp_View_Var_Samp_Order_By>;
  variance?: InputMaybe<Xp_View_Variance_Order_By>;
};

/** order by avg() on columns of table "xp_view" */
export type Xp_View_Avg_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "xp_view". All fields are combined with a logical 'AND'. */
export type Xp_View_Bool_Exp = {
  _and?: InputMaybe<Array<Xp_View_Bool_Exp>>;
  _not?: InputMaybe<Xp_View_Bool_Exp>;
  _or?: InputMaybe<Array<Xp_View_Bool_Exp>>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  event?: InputMaybe<Event_Bool_Exp>;
  originEventId?: InputMaybe<Int_Comparison_Exp>;
  path?: InputMaybe<String_Comparison_Exp>;
  pathByPath?: InputMaybe<Path_Bool_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  userId?: InputMaybe<Int_Comparison_Exp>;
};

/** order by max() on columns of table "xp_view" */
export type Xp_View_Max_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "xp_view" */
export type Xp_View_Min_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "xp_view". */
export type Xp_View_Order_By = {
  amount?: InputMaybe<Order_By>;
  event?: InputMaybe<Event_Order_By>;
  originEventId?: InputMaybe<Order_By>;
  path?: InputMaybe<Order_By>;
  pathByPath?: InputMaybe<Path_Order_By>;
  user?: InputMaybe<User_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** select columns of table "xp_view" */
export enum Xp_View_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  OriginEventId = 'originEventId',
  /** column name */
  Path = 'path',
  /** column name */
  UserId = 'userId'
}

/** order by stddev() on columns of table "xp_view" */
export type Xp_View_Stddev_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "xp_view" */
export type Xp_View_Stddev_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "xp_view" */
export type Xp_View_Stddev_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "xp_view" */
export type Xp_View_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Xp_View_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Xp_View_Stream_Cursor_Value_Input = {
  amount?: InputMaybe<Scalars['numeric']['input']>;
  originEventId?: InputMaybe<Scalars['Int']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['Int']['input']>;
};

/** order by sum() on columns of table "xp_view" */
export type Xp_View_Sum_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "xp_view" */
export type Xp_View_Var_Pop_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "xp_view" */
export type Xp_View_Var_Samp_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "xp_view" */
export type Xp_View_Variance_Order_By = {
  amount?: InputMaybe<Order_By>;
  originEventId?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

export type EventFieldsFragment = { __typename?: 'event', id: number, path: string, createdAt: any, startAt: any, endAt: any, parentId?: number | null, object: { __typename?: 'object', authorId?: number | null, type: string, name?: string | null }, children: Array<{ __typename?: 'event', id: number }>, usersRelation: Array<{ __typename?: 'event_user', userId: number, level: number }> };

export type GetEventChildrenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventChildrenQuery = { __typename?: 'query_root', rootEvents: Array<{ __typename?: 'event', id: number, path: string, createdAt: any, startAt: any, endAt: any, parentId?: number | null, object: { __typename?: 'object', authorId?: number | null, type: string, name?: string | null }, children: Array<{ __typename?: 'event', id: number }>, usersRelation: Array<{ __typename?: 'event_user', userId: number, level: number }> }>, childEvents: Array<{ __typename?: 'event', id: number, path: string, createdAt: any, startAt: any, endAt: any, parentId?: number | null, object: { __typename?: 'object', authorId?: number | null, type: string, name?: string | null }, children: Array<{ __typename?: 'event', id: number }>, usersRelation: Array<{ __typename?: 'event_user', userId: number, level: number }> }> };

export type GetEventTreeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEventTreeQuery = { __typename?: 'query_root', event: Array<{ __typename?: 'event', id: number, path: string, parentId?: number | null, startAt: any, endAt: any, object: { __typename?: 'object', name?: string | null, type: string }, usersRelation: Array<{ __typename?: 'event_user', createdAt: any, level: number, publicUser?: { __typename?: 'user_public_view', githubId?: number | null, id?: number | null, login?: string | null, firstName?: string | null, lastName?: string | null, avatarUrl?: string | null } | null }> }> };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', user_public_view: Array<{ __typename?: 'user_public_view', id?: number | null, login?: string | null, avatarUrl?: string | null, firstName?: string | null, lastName?: string | null, canBeAuditor?: boolean | null, canAccessPlatform?: boolean | null, campus?: string | null, githubId?: number | null }>, record_public_view: Array<{ __typename?: 'record_public_view', userId?: number | null, endAt?: any | null }> };

export const EventFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersRelation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]} as unknown as DocumentNode<EventFieldsFragment, unknown>;
export const GetEventChildrenDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventChildren"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"rootEvents"},"name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":true}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventFields"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"childEvents"},"name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parentId"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"EventFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"EventFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authorId"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"EnumValue","value":"desc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersRelation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}}]}}]} as unknown as DocumentNode<GetEventChildrenQuery, GetEventChildrenQueryVariables>;
export const GetEventTreeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventTree"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"path"}},{"kind":"Field","name":{"kind":"Name","value":"parentId"}},{"kind":"Field","name":{"kind":"Name","value":"startAt"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}},{"kind":"Field","name":{"kind":"Name","value":"object"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}},{"kind":"Field","name":{"kind":"Name","value":"usersRelation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"order_by"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"createdAt"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"level"}},{"kind":"Field","name":{"kind":"Name","value":"publicUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"githubId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventTreeQuery, GetEventTreeQueryVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user_public_view"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"login"}},{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"canBeAuditor"}},{"kind":"Field","name":{"kind":"Name","value":"canAccessPlatform"}},{"kind":"Field","name":{"kind":"Name","value":"campus"}},{"kind":"Field","name":{"kind":"Name","value":"githubId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"record_public_view"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"endAt"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_is_null"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"}},{"kind":"Field","name":{"kind":"Name","value":"endAt"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;