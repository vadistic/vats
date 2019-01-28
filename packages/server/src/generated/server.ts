export type Maybe<T> = T | null

export interface ApplicationWhereUniqueInput {
  id?: Maybe<string>
}

export interface TaskWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  owners_every?: Maybe<UserWhereInput>

  owners_some?: Maybe<UserWhereInput>

  owners_none?: Maybe<UserWhereInput>

  candidate?: Maybe<CandidateWhereInput>

  title?: Maybe<string>

  title_not?: Maybe<string>

  title_in?: Maybe<string[]>

  title_not_in?: Maybe<string[]>

  title_lt?: Maybe<string>

  title_lte?: Maybe<string>

  title_gt?: Maybe<string>

  title_gte?: Maybe<string>

  title_contains?: Maybe<string>

  title_not_contains?: Maybe<string>

  title_starts_with?: Maybe<string>

  title_not_starts_with?: Maybe<string>

  title_ends_with?: Maybe<string>

  title_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  dueAt?: Maybe<DateTime>

  dueAt_not?: Maybe<DateTime>

  dueAt_in?: Maybe<DateTime[]>

  dueAt_not_in?: Maybe<DateTime[]>

  dueAt_lt?: Maybe<DateTime>

  dueAt_lte?: Maybe<DateTime>

  dueAt_gt?: Maybe<DateTime>

  dueAt_gte?: Maybe<DateTime>

  AND?: Maybe<TaskWhereInput[]>

  OR?: Maybe<TaskWhereInput[]>

  NOT?: Maybe<TaskWhereInput[]>
}

export interface UserWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  tasks_every?: Maybe<TaskWhereInput>

  tasks_some?: Maybe<TaskWhereInput>

  tasks_none?: Maybe<TaskWhereInput>

  firstName?: Maybe<string>

  firstName_not?: Maybe<string>

  firstName_in?: Maybe<string[]>

  firstName_not_in?: Maybe<string[]>

  firstName_lt?: Maybe<string>

  firstName_lte?: Maybe<string>

  firstName_gt?: Maybe<string>

  firstName_gte?: Maybe<string>

  firstName_contains?: Maybe<string>

  firstName_not_contains?: Maybe<string>

  firstName_starts_with?: Maybe<string>

  firstName_not_starts_with?: Maybe<string>

  firstName_ends_with?: Maybe<string>

  firstName_not_ends_with?: Maybe<string>

  lastName?: Maybe<string>

  lastName_not?: Maybe<string>

  lastName_in?: Maybe<string[]>

  lastName_not_in?: Maybe<string[]>

  lastName_lt?: Maybe<string>

  lastName_lte?: Maybe<string>

  lastName_gt?: Maybe<string>

  lastName_gte?: Maybe<string>

  lastName_contains?: Maybe<string>

  lastName_not_contains?: Maybe<string>

  lastName_starts_with?: Maybe<string>

  lastName_not_starts_with?: Maybe<string>

  lastName_ends_with?: Maybe<string>

  lastName_not_ends_with?: Maybe<string>

  email?: Maybe<string>

  email_not?: Maybe<string>

  email_in?: Maybe<string[]>

  email_not_in?: Maybe<string[]>

  email_lt?: Maybe<string>

  email_lte?: Maybe<string>

  email_gt?: Maybe<string>

  email_gte?: Maybe<string>

  email_contains?: Maybe<string>

  email_not_contains?: Maybe<string>

  email_starts_with?: Maybe<string>

  email_not_starts_with?: Maybe<string>

  email_ends_with?: Maybe<string>

  email_not_ends_with?: Maybe<string>

  username?: Maybe<string>

  username_not?: Maybe<string>

  username_in?: Maybe<string[]>

  username_not_in?: Maybe<string[]>

  username_lt?: Maybe<string>

  username_lte?: Maybe<string>

  username_gt?: Maybe<string>

  username_gte?: Maybe<string>

  username_contains?: Maybe<string>

  username_not_contains?: Maybe<string>

  username_starts_with?: Maybe<string>

  username_not_starts_with?: Maybe<string>

  username_ends_with?: Maybe<string>

  username_not_ends_with?: Maybe<string>

  lastLogin?: Maybe<DateTime>

  lastLogin_not?: Maybe<DateTime>

  lastLogin_in?: Maybe<DateTime[]>

  lastLogin_not_in?: Maybe<DateTime[]>

  lastLogin_lt?: Maybe<DateTime>

  lastLogin_lte?: Maybe<DateTime>

  lastLogin_gt?: Maybe<DateTime>

  lastLogin_gte?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  deletedAt_not?: Maybe<DateTime>

  deletedAt_in?: Maybe<DateTime[]>

  deletedAt_not_in?: Maybe<DateTime[]>

  deletedAt_lt?: Maybe<DateTime>

  deletedAt_lte?: Maybe<DateTime>

  deletedAt_gt?: Maybe<DateTime>

  deletedAt_gte?: Maybe<DateTime>

  position?: Maybe<string>

  position_not?: Maybe<string>

  position_in?: Maybe<string[]>

  position_not_in?: Maybe<string[]>

  position_lt?: Maybe<string>

  position_lte?: Maybe<string>

  position_gt?: Maybe<string>

  position_gte?: Maybe<string>

  position_contains?: Maybe<string>

  position_not_contains?: Maybe<string>

  position_starts_with?: Maybe<string>

  position_not_starts_with?: Maybe<string>

  position_ends_with?: Maybe<string>

  position_not_ends_with?: Maybe<string>

  avatar?: Maybe<FileWhereInput>

  AND?: Maybe<UserWhereInput[]>

  OR?: Maybe<UserWhereInput[]>

  NOT?: Maybe<UserWhereInput[]>
}

export interface FileWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  size?: Maybe<number>

  size_not?: Maybe<number>

  size_in?: Maybe<number[]>

  size_not_in?: Maybe<number[]>

  size_lt?: Maybe<number>

  size_lte?: Maybe<number>

  size_gt?: Maybe<number>

  size_gte?: Maybe<number>

  type?: Maybe<string>

  type_not?: Maybe<string>

  type_in?: Maybe<string[]>

  type_not_in?: Maybe<string[]>

  type_lt?: Maybe<string>

  type_lte?: Maybe<string>

  type_gt?: Maybe<string>

  type_gte?: Maybe<string>

  type_contains?: Maybe<string>

  type_not_contains?: Maybe<string>

  type_starts_with?: Maybe<string>

  type_not_starts_with?: Maybe<string>

  type_ends_with?: Maybe<string>

  type_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  url?: Maybe<string>

  url_not?: Maybe<string>

  url_in?: Maybe<string[]>

  url_not_in?: Maybe<string[]>

  url_lt?: Maybe<string>

  url_lte?: Maybe<string>

  url_gt?: Maybe<string>

  url_gte?: Maybe<string>

  url_contains?: Maybe<string>

  url_not_contains?: Maybe<string>

  url_starts_with?: Maybe<string>

  url_not_starts_with?: Maybe<string>

  url_ends_with?: Maybe<string>

  url_not_ends_with?: Maybe<string>

  AND?: Maybe<FileWhereInput[]>

  OR?: Maybe<FileWhereInput[]>

  NOT?: Maybe<FileWhereInput[]>
}

export interface CandidateWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  firstName?: Maybe<string>

  firstName_not?: Maybe<string>

  firstName_in?: Maybe<string[]>

  firstName_not_in?: Maybe<string[]>

  firstName_lt?: Maybe<string>

  firstName_lte?: Maybe<string>

  firstName_gt?: Maybe<string>

  firstName_gte?: Maybe<string>

  firstName_contains?: Maybe<string>

  firstName_not_contains?: Maybe<string>

  firstName_starts_with?: Maybe<string>

  firstName_not_starts_with?: Maybe<string>

  firstName_ends_with?: Maybe<string>

  firstName_not_ends_with?: Maybe<string>

  lastName?: Maybe<string>

  lastName_not?: Maybe<string>

  lastName_in?: Maybe<string[]>

  lastName_not_in?: Maybe<string[]>

  lastName_lt?: Maybe<string>

  lastName_lte?: Maybe<string>

  lastName_gt?: Maybe<string>

  lastName_gte?: Maybe<string>

  lastName_contains?: Maybe<string>

  lastName_not_contains?: Maybe<string>

  lastName_starts_with?: Maybe<string>

  lastName_not_starts_with?: Maybe<string>

  lastName_ends_with?: Maybe<string>

  lastName_not_ends_with?: Maybe<string>

  avatar?: Maybe<FileWhereInput>

  metaCompany?: Maybe<string>

  metaCompany_not?: Maybe<string>

  metaCompany_in?: Maybe<string[]>

  metaCompany_not_in?: Maybe<string[]>

  metaCompany_lt?: Maybe<string>

  metaCompany_lte?: Maybe<string>

  metaCompany_gt?: Maybe<string>

  metaCompany_gte?: Maybe<string>

  metaCompany_contains?: Maybe<string>

  metaCompany_not_contains?: Maybe<string>

  metaCompany_starts_with?: Maybe<string>

  metaCompany_not_starts_with?: Maybe<string>

  metaCompany_ends_with?: Maybe<string>

  metaCompany_not_ends_with?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaHeadline_not?: Maybe<string>

  metaHeadline_in?: Maybe<string[]>

  metaHeadline_not_in?: Maybe<string[]>

  metaHeadline_lt?: Maybe<string>

  metaHeadline_lte?: Maybe<string>

  metaHeadline_gt?: Maybe<string>

  metaHeadline_gte?: Maybe<string>

  metaHeadline_contains?: Maybe<string>

  metaHeadline_not_contains?: Maybe<string>

  metaHeadline_starts_with?: Maybe<string>

  metaHeadline_not_starts_with?: Maybe<string>

  metaHeadline_ends_with?: Maybe<string>

  metaHeadline_not_ends_with?: Maybe<string>

  metaPosition?: Maybe<string>

  metaPosition_not?: Maybe<string>

  metaPosition_in?: Maybe<string[]>

  metaPosition_not_in?: Maybe<string[]>

  metaPosition_lt?: Maybe<string>

  metaPosition_lte?: Maybe<string>

  metaPosition_gt?: Maybe<string>

  metaPosition_gte?: Maybe<string>

  metaPosition_contains?: Maybe<string>

  metaPosition_not_contains?: Maybe<string>

  metaPosition_starts_with?: Maybe<string>

  metaPosition_not_starts_with?: Maybe<string>

  metaPosition_ends_with?: Maybe<string>

  metaPosition_not_ends_with?: Maybe<string>

  resumesFile_every?: Maybe<FileWhereInput>

  resumesFile_some?: Maybe<FileWhereInput>

  resumesFile_none?: Maybe<FileWhereInput>

  coverLettersFile_every?: Maybe<FileWhereInput>

  coverLettersFile_some?: Maybe<FileWhereInput>

  coverLettersFile_none?: Maybe<FileWhereInput>

  tags_every?: Maybe<TagWhereInput>

  tags_some?: Maybe<TagWhereInput>

  tags_none?: Maybe<TagWhereInput>

  fields_every?: Maybe<FieldInstanceWhereInput>

  fields_some?: Maybe<FieldInstanceWhereInput>

  fields_none?: Maybe<FieldInstanceWhereInput>

  tasks_every?: Maybe<TaskWhereInput>

  tasks_some?: Maybe<TaskWhereInput>

  tasks_none?: Maybe<TaskWhereInput>

  applications_every?: Maybe<ApplicationWhereInput>

  applications_some?: Maybe<ApplicationWhereInput>

  applications_none?: Maybe<ApplicationWhereInput>

  comments_every?: Maybe<CommentWhereInput>

  comments_some?: Maybe<CommentWhereInput>

  comments_none?: Maybe<CommentWhereInput>

  AND?: Maybe<CandidateWhereInput[]>

  OR?: Maybe<CandidateWhereInput[]>

  NOT?: Maybe<CandidateWhereInput[]>
}

export interface TagWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  label?: Maybe<string>

  label_not?: Maybe<string>

  label_in?: Maybe<string[]>

  label_not_in?: Maybe<string[]>

  label_lt?: Maybe<string>

  label_lte?: Maybe<string>

  label_gt?: Maybe<string>

  label_gte?: Maybe<string>

  label_contains?: Maybe<string>

  label_not_contains?: Maybe<string>

  label_starts_with?: Maybe<string>

  label_not_starts_with?: Maybe<string>

  label_ends_with?: Maybe<string>

  label_not_ends_with?: Maybe<string>

  AND?: Maybe<TagWhereInput[]>

  OR?: Maybe<TagWhereInput[]>

  NOT?: Maybe<TagWhereInput[]>
}

export interface FieldInstanceWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  field?: Maybe<FieldWhereInput>

  value?: Maybe<string>

  value_not?: Maybe<string>

  value_in?: Maybe<string[]>

  value_not_in?: Maybe<string[]>

  value_lt?: Maybe<string>

  value_lte?: Maybe<string>

  value_gt?: Maybe<string>

  value_gte?: Maybe<string>

  value_contains?: Maybe<string>

  value_not_contains?: Maybe<string>

  value_starts_with?: Maybe<string>

  value_not_starts_with?: Maybe<string>

  value_ends_with?: Maybe<string>

  value_not_ends_with?: Maybe<string>

  AND?: Maybe<FieldInstanceWhereInput[]>

  OR?: Maybe<FieldInstanceWhereInput[]>

  NOT?: Maybe<FieldInstanceWhereInput[]>
}

export interface FieldWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  type?: Maybe<FieldType>

  type_not?: Maybe<FieldType>

  type_in?: Maybe<FieldType[]>

  type_not_in?: Maybe<FieldType[]>

  label?: Maybe<string>

  label_not?: Maybe<string>

  label_in?: Maybe<string[]>

  label_not_in?: Maybe<string[]>

  label_lt?: Maybe<string>

  label_lte?: Maybe<string>

  label_gt?: Maybe<string>

  label_gte?: Maybe<string>

  label_contains?: Maybe<string>

  label_not_contains?: Maybe<string>

  label_starts_with?: Maybe<string>

  label_not_starts_with?: Maybe<string>

  label_ends_with?: Maybe<string>

  label_not_ends_with?: Maybe<string>

  AND?: Maybe<FieldWhereInput[]>

  OR?: Maybe<FieldWhereInput[]>

  NOT?: Maybe<FieldWhereInput[]>
}

export interface ApplicationWhereInput {
  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  type?: Maybe<ApplicationType>

  type_not?: Maybe<ApplicationType>

  type_in?: Maybe<ApplicationType[]>

  type_not_in?: Maybe<ApplicationType[]>

  disqualification?: Maybe<DisqualificationInstanceWhereInput>

  stage?: Maybe<StageWhereInput>

  job?: Maybe<JobWhereInput>

  candidate?: Maybe<CandidateWhereInput>

  AND?: Maybe<ApplicationWhereInput[]>

  OR?: Maybe<ApplicationWhereInput[]>

  NOT?: Maybe<ApplicationWhereInput[]>
}

export interface DisqualificationInstanceWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  disqualification?: Maybe<DisqualificationWhereInput>

  createdBy?: Maybe<UserWhereInput>

  content?: Maybe<string>

  content_not?: Maybe<string>

  content_in?: Maybe<string[]>

  content_not_in?: Maybe<string[]>

  content_lt?: Maybe<string>

  content_lte?: Maybe<string>

  content_gt?: Maybe<string>

  content_gte?: Maybe<string>

  content_contains?: Maybe<string>

  content_not_contains?: Maybe<string>

  content_starts_with?: Maybe<string>

  content_not_starts_with?: Maybe<string>

  content_ends_with?: Maybe<string>

  content_not_ends_with?: Maybe<string>

  AND?: Maybe<DisqualificationInstanceWhereInput[]>

  OR?: Maybe<DisqualificationInstanceWhereInput[]>

  NOT?: Maybe<DisqualificationInstanceWhereInput[]>
}

export interface DisqualificationWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  AND?: Maybe<DisqualificationWhereInput[]>

  OR?: Maybe<DisqualificationWhereInput[]>

  NOT?: Maybe<DisqualificationWhereInput[]>
}

export interface StageWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  type?: Maybe<StageType>

  type_not?: Maybe<StageType>

  type_in?: Maybe<StageType[]>

  type_not_in?: Maybe<StageType[]>

  AND?: Maybe<StageWhereInput[]>

  OR?: Maybe<StageWhereInput[]>

  NOT?: Maybe<StageWhereInput[]>
}

export interface JobWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  workspace?: Maybe<WorkspaceWhereInput>

  applications_every?: Maybe<ApplicationWhereInput>

  applications_some?: Maybe<ApplicationWhereInput>

  applications_none?: Maybe<ApplicationWhereInput>

  workflow?: Maybe<WorkflowWhereInput>

  comments_every?: Maybe<CommentWhereInput>

  comments_some?: Maybe<CommentWhereInput>

  comments_none?: Maybe<CommentWhereInput>

  type?: Maybe<JobType>

  type_not?: Maybe<JobType>

  type_in?: Maybe<JobType[]>

  type_not_in?: Maybe<JobType[]>

  department?: Maybe<string>

  department_not?: Maybe<string>

  department_in?: Maybe<string[]>

  department_not_in?: Maybe<string[]>

  department_lt?: Maybe<string>

  department_lte?: Maybe<string>

  department_gt?: Maybe<string>

  department_gte?: Maybe<string>

  department_contains?: Maybe<string>

  department_not_contains?: Maybe<string>

  department_starts_with?: Maybe<string>

  department_not_starts_with?: Maybe<string>

  department_ends_with?: Maybe<string>

  department_not_ends_with?: Maybe<string>

  locations_every?: Maybe<LocationWhereInput>

  locations_some?: Maybe<LocationWhereInput>

  locations_none?: Maybe<LocationWhereInput>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  requirements?: Maybe<string>

  requirements_not?: Maybe<string>

  requirements_in?: Maybe<string[]>

  requirements_not_in?: Maybe<string[]>

  requirements_lt?: Maybe<string>

  requirements_lte?: Maybe<string>

  requirements_gt?: Maybe<string>

  requirements_gte?: Maybe<string>

  requirements_contains?: Maybe<string>

  requirements_not_contains?: Maybe<string>

  requirements_starts_with?: Maybe<string>

  requirements_not_starts_with?: Maybe<string>

  requirements_ends_with?: Maybe<string>

  requirements_not_ends_with?: Maybe<string>

  AND?: Maybe<JobWhereInput[]>

  OR?: Maybe<JobWhereInput[]>

  NOT?: Maybe<JobWhereInput[]>
}

export interface WorkspaceWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  users_every?: Maybe<UserWhereInput>

  users_some?: Maybe<UserWhereInput>

  users_none?: Maybe<UserWhereInput>

  jobs_every?: Maybe<JobWhereInput>

  jobs_some?: Maybe<JobWhereInput>

  jobs_none?: Maybe<JobWhereInput>

  candidates_every?: Maybe<CandidateWhereInput>

  candidates_some?: Maybe<CandidateWhereInput>

  candidates_none?: Maybe<CandidateWhereInput>

  workflows_every?: Maybe<WorkflowWhereInput>

  workflows_some?: Maybe<WorkflowWhereInput>

  workflows_none?: Maybe<WorkflowWhereInput>

  invites_every?: Maybe<InviteWhereInput>

  invites_some?: Maybe<InviteWhereInput>

  invites_none?: Maybe<InviteWhereInput>

  tags_every?: Maybe<TagWhereInput>

  tags_some?: Maybe<TagWhereInput>

  tags_none?: Maybe<TagWhereInput>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  AND?: Maybe<WorkspaceWhereInput[]>

  OR?: Maybe<WorkspaceWhereInput[]>

  NOT?: Maybe<WorkspaceWhereInput[]>
}

export interface WorkflowWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  stages_every?: Maybe<StageWhereInput>

  stages_some?: Maybe<StageWhereInput>

  stages_none?: Maybe<StageWhereInput>

  disqualifications_every?: Maybe<DisqualificationWhereInput>

  disqualifications_some?: Maybe<DisqualificationWhereInput>

  disqualifications_none?: Maybe<DisqualificationWhereInput>

  fields_every?: Maybe<FieldWhereInput>

  fields_some?: Maybe<FieldWhereInput>

  fields_none?: Maybe<FieldWhereInput>

  AND?: Maybe<WorkflowWhereInput[]>

  OR?: Maybe<WorkflowWhereInput[]>

  NOT?: Maybe<WorkflowWhereInput[]>
}

export interface InviteWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  email?: Maybe<string>

  email_not?: Maybe<string>

  email_in?: Maybe<string[]>

  email_not_in?: Maybe<string[]>

  email_lt?: Maybe<string>

  email_lte?: Maybe<string>

  email_gt?: Maybe<string>

  email_gte?: Maybe<string>

  email_contains?: Maybe<string>

  email_not_contains?: Maybe<string>

  email_starts_with?: Maybe<string>

  email_not_starts_with?: Maybe<string>

  email_ends_with?: Maybe<string>

  email_not_ends_with?: Maybe<string>

  expireAt?: Maybe<DateTime>

  expireAt_not?: Maybe<DateTime>

  expireAt_in?: Maybe<DateTime[]>

  expireAt_not_in?: Maybe<DateTime[]>

  expireAt_lt?: Maybe<DateTime>

  expireAt_lte?: Maybe<DateTime>

  expireAt_gt?: Maybe<DateTime>

  expireAt_gte?: Maybe<DateTime>

  invitedBy?: Maybe<UserWhereInput>

  AND?: Maybe<InviteWhereInput[]>

  OR?: Maybe<InviteWhereInput[]>

  NOT?: Maybe<InviteWhereInput[]>
}

export interface CommentWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  createdBy?: Maybe<UserWhereInput>

  parent?: Maybe<CommentWhereInput>

  content?: Maybe<string>

  content_not?: Maybe<string>

  content_in?: Maybe<string[]>

  content_not_in?: Maybe<string[]>

  content_lt?: Maybe<string>

  content_lte?: Maybe<string>

  content_gt?: Maybe<string>

  content_gte?: Maybe<string>

  content_contains?: Maybe<string>

  content_not_contains?: Maybe<string>

  content_starts_with?: Maybe<string>

  content_not_starts_with?: Maybe<string>

  content_ends_with?: Maybe<string>

  content_not_ends_with?: Maybe<string>

  AND?: Maybe<CommentWhereInput[]>

  OR?: Maybe<CommentWhereInput[]>

  NOT?: Maybe<CommentWhereInput[]>
}

export interface LocationWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  country?: Maybe<string>

  country_not?: Maybe<string>

  country_in?: Maybe<string[]>

  country_not_in?: Maybe<string[]>

  country_lt?: Maybe<string>

  country_lte?: Maybe<string>

  country_gt?: Maybe<string>

  country_gte?: Maybe<string>

  country_contains?: Maybe<string>

  country_not_contains?: Maybe<string>

  country_starts_with?: Maybe<string>

  country_not_starts_with?: Maybe<string>

  country_ends_with?: Maybe<string>

  country_not_ends_with?: Maybe<string>

  region?: Maybe<string>

  region_not?: Maybe<string>

  region_in?: Maybe<string[]>

  region_not_in?: Maybe<string[]>

  region_lt?: Maybe<string>

  region_lte?: Maybe<string>

  region_gt?: Maybe<string>

  region_gte?: Maybe<string>

  region_contains?: Maybe<string>

  region_not_contains?: Maybe<string>

  region_starts_with?: Maybe<string>

  region_not_starts_with?: Maybe<string>

  region_ends_with?: Maybe<string>

  region_not_ends_with?: Maybe<string>

  city?: Maybe<string>

  city_not?: Maybe<string>

  city_in?: Maybe<string[]>

  city_not_in?: Maybe<string[]>

  city_lt?: Maybe<string>

  city_lte?: Maybe<string>

  city_gt?: Maybe<string>

  city_gte?: Maybe<string>

  city_contains?: Maybe<string>

  city_not_contains?: Maybe<string>

  city_starts_with?: Maybe<string>

  city_not_starts_with?: Maybe<string>

  city_ends_with?: Maybe<string>

  city_not_ends_with?: Maybe<string>

  zip?: Maybe<string>

  zip_not?: Maybe<string>

  zip_in?: Maybe<string[]>

  zip_not_in?: Maybe<string[]>

  zip_lt?: Maybe<string>

  zip_lte?: Maybe<string>

  zip_gt?: Maybe<string>

  zip_gte?: Maybe<string>

  zip_contains?: Maybe<string>

  zip_not_contains?: Maybe<string>

  zip_starts_with?: Maybe<string>

  zip_not_starts_with?: Maybe<string>

  zip_ends_with?: Maybe<string>

  zip_not_ends_with?: Maybe<string>

  AND?: Maybe<LocationWhereInput[]>

  OR?: Maybe<LocationWhereInput[]>

  NOT?: Maybe<LocationWhereInput[]>
}

export interface CandidateWhereUniqueInput {
  id?: Maybe<string>
}

export interface JobWhereUniqueInput {
  id?: Maybe<string>
}

export interface TagWhereUniqueInput {
  id?: Maybe<string>
}

export interface TaskWhereUniqueInput {
  id?: Maybe<string>
}

export interface UserWhereUniqueInput {
  id?: Maybe<string>

  email?: Maybe<string>
}

export interface ApplicationCreateInput {
  type: ApplicationType

  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>

  stage: StageCreateOneInput

  job: JobCreateOneWithoutApplicationsInput

  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface DisqualificationInstanceCreateOneInput {
  create?: Maybe<DisqualificationInstanceCreateInput>

  connect?: Maybe<DisqualificationInstanceWhereUniqueInput>
}

export interface DisqualificationInstanceCreateInput {
  disqualification: DisqualificationCreateOneInput

  createdBy: UserCreateOneInput

  content?: Maybe<string>
}

export interface DisqualificationCreateOneInput {
  create?: Maybe<DisqualificationCreateInput>

  connect?: Maybe<DisqualificationWhereUniqueInput>
}

export interface DisqualificationCreateInput {
  name: string

  description?: Maybe<string>
}

export interface DisqualificationWhereUniqueInput {
  id?: Maybe<string>
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>

  connect?: Maybe<UserWhereUniqueInput>
}

export interface UserCreateInput {
  tasks?: Maybe<TaskCreateManyWithoutOwnersInput>

  firstName: string

  lastName: string

  email: string

  username: string

  lastLogin?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  position?: Maybe<string>

  avatar?: Maybe<FileCreateOneInput>
}

export interface TaskCreateManyWithoutOwnersInput {
  create?: Maybe<TaskCreateWithoutOwnersInput[]>

  connect?: Maybe<TaskWhereUniqueInput[]>
}

export interface TaskCreateWithoutOwnersInput {
  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>

  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface CandidateCreateOneWithoutTasksInput {
  create?: Maybe<CandidateCreateWithoutTasksInput>

  connect?: Maybe<CandidateWhereUniqueInput>
}

export interface CandidateCreateWithoutTasksInput {
  firstName: string

  lastName: string

  emails?: Maybe<CandidateCreateemailsInput>

  phones?: Maybe<CandidateCreatephonesInput>

  links?: Maybe<CandidateCreatelinksInput>

  avatar?: Maybe<FileCreateOneInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateCreateresumesStringInput>

  resumesFile?: Maybe<FileCreateManyInput>

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>

  coverLettersFile?: Maybe<FileCreateManyInput>

  tags?: Maybe<TagCreateManyInput>

  source?: Maybe<CandidateCreatesourceInput>

  fields?: Maybe<FieldInstanceCreateManyInput>

  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>

  comments?: Maybe<CommentCreateManyInput>
}

export interface CandidateCreateemailsInput {
  set?: Maybe<string[]>
}

export interface CandidateCreatephonesInput {
  set?: Maybe<string[]>
}

export interface CandidateCreatelinksInput {
  set?: Maybe<string[]>
}

export interface FileCreateOneInput {
  create?: Maybe<FileCreateInput>

  connect?: Maybe<FileWhereUniqueInput>
}

export interface FileCreateInput {
  size: number

  type: string

  name: string

  url: string
}

export interface FileWhereUniqueInput {
  id?: Maybe<string>

  url?: Maybe<string>
}

export interface CandidateCreateresumesStringInput {
  set?: Maybe<string[]>
}

export interface FileCreateManyInput {
  create?: Maybe<FileCreateInput[]>

  connect?: Maybe<FileWhereUniqueInput[]>
}

export interface CandidateCreatecoverLettersStringInput {
  set?: Maybe<string[]>
}

export interface TagCreateManyInput {
  create?: Maybe<TagCreateInput[]>

  connect?: Maybe<TagWhereUniqueInput[]>
}

export interface TagCreateInput {
  label: string
}

export interface CandidateCreatesourceInput {
  set?: Maybe<string[]>
}

export interface FieldInstanceCreateManyInput {
  create?: Maybe<FieldInstanceCreateInput[]>

  connect?: Maybe<FieldInstanceWhereUniqueInput[]>
}

export interface FieldInstanceCreateInput {
  field: FieldCreateOneInput

  value?: Maybe<string>
}

export interface FieldCreateOneInput {
  create?: Maybe<FieldCreateInput>

  connect?: Maybe<FieldWhereUniqueInput>
}

export interface FieldCreateInput {
  type: FieldType

  label: string
}

export interface FieldWhereUniqueInput {
  id?: Maybe<string>
}

export interface FieldInstanceWhereUniqueInput {
  id?: Maybe<string>
}

export interface ApplicationCreateManyWithoutCandidateInput {
  create?: Maybe<ApplicationCreateWithoutCandidateInput[]>

  connect?: Maybe<ApplicationWhereUniqueInput[]>
}

export interface ApplicationCreateWithoutCandidateInput {
  type: ApplicationType

  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>

  stage: StageCreateOneInput

  job: JobCreateOneWithoutApplicationsInput
}

export interface StageCreateOneInput {
  create?: Maybe<StageCreateInput>

  connect?: Maybe<StageWhereUniqueInput>
}

export interface StageCreateInput {
  name: string

  description?: Maybe<string>

  type: StageType
}

export interface StageWhereUniqueInput {
  id?: Maybe<string>
}

export interface JobCreateOneWithoutApplicationsInput {
  create?: Maybe<JobCreateWithoutApplicationsInput>

  connect?: Maybe<JobWhereUniqueInput>
}

export interface JobCreateWithoutApplicationsInput {
  workspace: WorkspaceCreateOneWithoutJobsInput

  workflow: WorkflowCreateOneInput

  comments?: Maybe<CommentCreateManyInput>

  type: JobType

  department?: Maybe<string>

  locations?: Maybe<LocationCreateManyInput>

  name: string

  description?: Maybe<string>

  requirements?: Maybe<string>
}

export interface WorkspaceCreateOneWithoutJobsInput {
  create?: Maybe<WorkspaceCreateWithoutJobsInput>

  connect?: Maybe<WorkspaceWhereUniqueInput>
}

export interface WorkspaceCreateWithoutJobsInput {
  users?: Maybe<UserCreateManyInput>

  candidates?: Maybe<CandidateCreateManyInput>

  workflows?: Maybe<WorkflowCreateManyInput>

  invites?: Maybe<InviteCreateManyInput>

  tags?: Maybe<TagCreateManyInput>

  name: string
}

export interface UserCreateManyInput {
  create?: Maybe<UserCreateInput[]>

  connect?: Maybe<UserWhereUniqueInput[]>
}

export interface CandidateCreateManyInput {
  create?: Maybe<CandidateCreateInput[]>

  connect?: Maybe<CandidateWhereUniqueInput[]>
}

export interface CandidateCreateInput {
  firstName: string

  lastName: string

  emails?: Maybe<CandidateCreateemailsInput>

  phones?: Maybe<CandidateCreatephonesInput>

  links?: Maybe<CandidateCreatelinksInput>

  avatar?: Maybe<FileCreateOneInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateCreateresumesStringInput>

  resumesFile?: Maybe<FileCreateManyInput>

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>

  coverLettersFile?: Maybe<FileCreateManyInput>

  tags?: Maybe<TagCreateManyInput>

  source?: Maybe<CandidateCreatesourceInput>

  fields?: Maybe<FieldInstanceCreateManyInput>

  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>

  applications?: Maybe<ApplicationCreateManyWithoutCandidateInput>

  comments?: Maybe<CommentCreateManyInput>
}

export interface TaskCreateManyWithoutCandidateInput {
  create?: Maybe<TaskCreateWithoutCandidateInput[]>

  connect?: Maybe<TaskWhereUniqueInput[]>
}

export interface TaskCreateWithoutCandidateInput {
  owners?: Maybe<UserCreateManyWithoutTasksInput>

  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface UserCreateManyWithoutTasksInput {
  create?: Maybe<UserCreateWithoutTasksInput[]>

  connect?: Maybe<UserWhereUniqueInput[]>
}

export interface UserCreateWithoutTasksInput {
  firstName: string

  lastName: string

  email: string

  username: string

  lastLogin?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  position?: Maybe<string>

  avatar?: Maybe<FileCreateOneInput>
}

export interface CommentCreateManyInput {
  create?: Maybe<CommentCreateInput[]>

  connect?: Maybe<CommentWhereUniqueInput[]>
}

export interface CommentCreateInput {
  createdBy: UserCreateOneInput

  parent?: Maybe<CommentCreateOneInput>

  content: string
}

export interface CommentCreateOneInput {
  create?: Maybe<CommentCreateInput>

  connect?: Maybe<CommentWhereUniqueInput>
}

export interface CommentWhereUniqueInput {
  id?: Maybe<string>
}

export interface WorkflowCreateManyInput {
  create?: Maybe<WorkflowCreateInput[]>

  connect?: Maybe<WorkflowWhereUniqueInput[]>
}

export interface WorkflowCreateInput {
  name: string

  description?: Maybe<string>

  stages?: Maybe<StageCreateManyInput>

  disqualifications?: Maybe<DisqualificationCreateManyInput>

  fields?: Maybe<FieldCreateManyInput>
}

export interface StageCreateManyInput {
  create?: Maybe<StageCreateInput[]>

  connect?: Maybe<StageWhereUniqueInput[]>
}

export interface DisqualificationCreateManyInput {
  create?: Maybe<DisqualificationCreateInput[]>

  connect?: Maybe<DisqualificationWhereUniqueInput[]>
}

export interface FieldCreateManyInput {
  create?: Maybe<FieldCreateInput[]>

  connect?: Maybe<FieldWhereUniqueInput[]>
}

export interface WorkflowWhereUniqueInput {
  id?: Maybe<string>
}

export interface InviteCreateManyInput {
  create?: Maybe<InviteCreateInput[]>

  connect?: Maybe<InviteWhereUniqueInput[]>
}

export interface InviteCreateInput {
  email: string
}

export interface InviteWhereUniqueInput {
  id?: Maybe<string>
}

export interface WorkspaceWhereUniqueInput {
  id?: Maybe<string>
}

export interface WorkflowCreateOneInput {
  create?: Maybe<WorkflowCreateInput>

  connect?: Maybe<WorkflowWhereUniqueInput>
}

export interface LocationCreateManyInput {
  create?: Maybe<LocationCreateInput[]>

  connect?: Maybe<LocationWhereUniqueInput[]>
}

export interface LocationCreateInput {
  country: string

  region: string

  city: string

  zip: string
}

export interface LocationWhereUniqueInput {
  id?: Maybe<string>
}

export interface DisqualificationInstanceWhereUniqueInput {
  id?: Maybe<string>
}

export interface CandidateCreateOneWithoutApplicationsInput {
  create?: Maybe<CandidateCreateWithoutApplicationsInput>

  connect?: Maybe<CandidateWhereUniqueInput>
}

export interface CandidateCreateWithoutApplicationsInput {
  firstName: string

  lastName: string

  emails?: Maybe<CandidateCreateemailsInput>

  phones?: Maybe<CandidateCreatephonesInput>

  links?: Maybe<CandidateCreatelinksInput>

  avatar?: Maybe<FileCreateOneInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateCreateresumesStringInput>

  resumesFile?: Maybe<FileCreateManyInput>

  coverLettersString?: Maybe<CandidateCreatecoverLettersStringInput>

  coverLettersFile?: Maybe<FileCreateManyInput>

  tags?: Maybe<TagCreateManyInput>

  source?: Maybe<CandidateCreatesourceInput>

  fields?: Maybe<FieldInstanceCreateManyInput>

  tasks?: Maybe<TaskCreateManyWithoutCandidateInput>

  comments?: Maybe<CommentCreateManyInput>
}

export interface ApplicationUpdateInput {
  type?: Maybe<ApplicationType>

  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>

  stage?: Maybe<StageUpdateOneRequiredInput>

  job?: Maybe<JobUpdateOneRequiredWithoutApplicationsInput>

  candidate?: Maybe<CandidateUpdateOneRequiredWithoutApplicationsInput>
}

export interface DisqualificationInstanceUpdateOneInput {
  create?: Maybe<DisqualificationInstanceCreateInput>

  update?: Maybe<DisqualificationInstanceUpdateDataInput>

  upsert?: Maybe<DisqualificationInstanceUpsertNestedInput>

  delete?: Maybe<boolean>

  disconnect?: Maybe<boolean>

  connect?: Maybe<DisqualificationInstanceWhereUniqueInput>
}

export interface DisqualificationInstanceUpdateDataInput {
  disqualification?: Maybe<DisqualificationUpdateOneRequiredInput>

  createdBy?: Maybe<UserUpdateOneRequiredInput>

  content?: Maybe<string>
}

export interface DisqualificationUpdateOneRequiredInput {
  create?: Maybe<DisqualificationCreateInput>

  update?: Maybe<DisqualificationUpdateDataInput>

  upsert?: Maybe<DisqualificationUpsertNestedInput>

  connect?: Maybe<DisqualificationWhereUniqueInput>
}

export interface DisqualificationUpdateDataInput {
  name?: Maybe<string>

  description?: Maybe<string>
}

export interface DisqualificationUpsertNestedInput {
  update: DisqualificationUpdateDataInput

  create: DisqualificationCreateInput
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>

  update?: Maybe<UserUpdateDataInput>

  upsert?: Maybe<UserUpsertNestedInput>

  connect?: Maybe<UserWhereUniqueInput>
}

export interface UserUpdateDataInput {
  tasks?: Maybe<TaskUpdateManyWithoutOwnersInput>

  firstName?: Maybe<string>

  lastName?: Maybe<string>

  email?: Maybe<string>

  username?: Maybe<string>

  lastLogin?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  position?: Maybe<string>

  avatar?: Maybe<FileUpdateOneInput>
}

export interface TaskUpdateManyWithoutOwnersInput {
  create?: Maybe<TaskCreateWithoutOwnersInput[]>

  delete?: Maybe<TaskWhereUniqueInput[]>

  connect?: Maybe<TaskWhereUniqueInput[]>

  disconnect?: Maybe<TaskWhereUniqueInput[]>

  update?: Maybe<TaskUpdateWithWhereUniqueWithoutOwnersInput[]>

  upsert?: Maybe<TaskUpsertWithWhereUniqueWithoutOwnersInput[]>

  deleteMany?: Maybe<TaskScalarWhereInput[]>

  updateMany?: Maybe<TaskUpdateManyWithWhereNestedInput[]>
}

export interface TaskUpdateWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput

  data: TaskUpdateWithoutOwnersDataInput
}

export interface TaskUpdateWithoutOwnersDataInput {
  candidate?: Maybe<CandidateUpdateOneWithoutTasksInput>

  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface CandidateUpdateOneWithoutTasksInput {
  create?: Maybe<CandidateCreateWithoutTasksInput>

  update?: Maybe<CandidateUpdateWithoutTasksDataInput>

  upsert?: Maybe<CandidateUpsertWithoutTasksInput>

  delete?: Maybe<boolean>

  disconnect?: Maybe<boolean>

  connect?: Maybe<CandidateWhereUniqueInput>
}

export interface CandidateUpdateWithoutTasksDataInput {
  firstName?: Maybe<string>

  lastName?: Maybe<string>

  emails?: Maybe<CandidateUpdateemailsInput>

  phones?: Maybe<CandidateUpdatephonesInput>

  links?: Maybe<CandidateUpdatelinksInput>

  avatar?: Maybe<FileUpdateOneInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateUpdateresumesStringInput>

  resumesFile?: Maybe<FileUpdateManyInput>

  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>

  coverLettersFile?: Maybe<FileUpdateManyInput>

  tags?: Maybe<TagUpdateManyInput>

  source?: Maybe<CandidateUpdatesourceInput>

  fields?: Maybe<FieldInstanceUpdateManyInput>

  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>

  comments?: Maybe<CommentUpdateManyInput>
}

export interface CandidateUpdateemailsInput {
  set?: Maybe<string[]>
}

export interface CandidateUpdatephonesInput {
  set?: Maybe<string[]>
}

export interface CandidateUpdatelinksInput {
  set?: Maybe<string[]>
}

export interface FileUpdateOneInput {
  create?: Maybe<FileCreateInput>

  update?: Maybe<FileUpdateDataInput>

  upsert?: Maybe<FileUpsertNestedInput>

  delete?: Maybe<boolean>

  disconnect?: Maybe<boolean>

  connect?: Maybe<FileWhereUniqueInput>
}

export interface FileUpdateDataInput {
  size?: Maybe<number>

  type?: Maybe<string>

  name?: Maybe<string>

  url?: Maybe<string>
}

export interface FileUpsertNestedInput {
  update: FileUpdateDataInput

  create: FileCreateInput
}

export interface CandidateUpdateresumesStringInput {
  set?: Maybe<string[]>
}

export interface FileUpdateManyInput {
  create?: Maybe<FileCreateInput[]>

  update?: Maybe<FileUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<FileUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<FileWhereUniqueInput[]>

  connect?: Maybe<FileWhereUniqueInput[]>

  disconnect?: Maybe<FileWhereUniqueInput[]>

  deleteMany?: Maybe<FileScalarWhereInput[]>

  updateMany?: Maybe<FileUpdateManyWithWhereNestedInput[]>
}

export interface FileUpdateWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput

  data: FileUpdateDataInput
}

export interface FileUpsertWithWhereUniqueNestedInput {
  where: FileWhereUniqueInput

  update: FileUpdateDataInput

  create: FileCreateInput
}

export interface FileScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  size?: Maybe<number>

  size_not?: Maybe<number>

  size_in?: Maybe<number[]>

  size_not_in?: Maybe<number[]>

  size_lt?: Maybe<number>

  size_lte?: Maybe<number>

  size_gt?: Maybe<number>

  size_gte?: Maybe<number>

  type?: Maybe<string>

  type_not?: Maybe<string>

  type_in?: Maybe<string[]>

  type_not_in?: Maybe<string[]>

  type_lt?: Maybe<string>

  type_lte?: Maybe<string>

  type_gt?: Maybe<string>

  type_gte?: Maybe<string>

  type_contains?: Maybe<string>

  type_not_contains?: Maybe<string>

  type_starts_with?: Maybe<string>

  type_not_starts_with?: Maybe<string>

  type_ends_with?: Maybe<string>

  type_not_ends_with?: Maybe<string>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  url?: Maybe<string>

  url_not?: Maybe<string>

  url_in?: Maybe<string[]>

  url_not_in?: Maybe<string[]>

  url_lt?: Maybe<string>

  url_lte?: Maybe<string>

  url_gt?: Maybe<string>

  url_gte?: Maybe<string>

  url_contains?: Maybe<string>

  url_not_contains?: Maybe<string>

  url_starts_with?: Maybe<string>

  url_not_starts_with?: Maybe<string>

  url_ends_with?: Maybe<string>

  url_not_ends_with?: Maybe<string>

  AND?: Maybe<FileScalarWhereInput[]>

  OR?: Maybe<FileScalarWhereInput[]>

  NOT?: Maybe<FileScalarWhereInput[]>
}

export interface FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput

  data: FileUpdateManyDataInput
}

export interface FileUpdateManyDataInput {
  size?: Maybe<number>

  type?: Maybe<string>

  name?: Maybe<string>

  url?: Maybe<string>
}

export interface CandidateUpdatecoverLettersStringInput {
  set?: Maybe<string[]>
}

export interface TagUpdateManyInput {
  create?: Maybe<TagCreateInput[]>

  update?: Maybe<TagUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<TagUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<TagWhereUniqueInput[]>

  connect?: Maybe<TagWhereUniqueInput[]>

  disconnect?: Maybe<TagWhereUniqueInput[]>

  deleteMany?: Maybe<TagScalarWhereInput[]>

  updateMany?: Maybe<TagUpdateManyWithWhereNestedInput[]>
}

export interface TagUpdateWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput

  data: TagUpdateDataInput
}

export interface TagUpdateDataInput {
  label?: Maybe<string>
}

export interface TagUpsertWithWhereUniqueNestedInput {
  where: TagWhereUniqueInput

  update: TagUpdateDataInput

  create: TagCreateInput
}

export interface TagScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  label?: Maybe<string>

  label_not?: Maybe<string>

  label_in?: Maybe<string[]>

  label_not_in?: Maybe<string[]>

  label_lt?: Maybe<string>

  label_lte?: Maybe<string>

  label_gt?: Maybe<string>

  label_gte?: Maybe<string>

  label_contains?: Maybe<string>

  label_not_contains?: Maybe<string>

  label_starts_with?: Maybe<string>

  label_not_starts_with?: Maybe<string>

  label_ends_with?: Maybe<string>

  label_not_ends_with?: Maybe<string>

  AND?: Maybe<TagScalarWhereInput[]>

  OR?: Maybe<TagScalarWhereInput[]>

  NOT?: Maybe<TagScalarWhereInput[]>
}

export interface TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput

  data: TagUpdateManyDataInput
}

export interface TagUpdateManyDataInput {
  label?: Maybe<string>
}

export interface CandidateUpdatesourceInput {
  set?: Maybe<string[]>
}

export interface FieldInstanceUpdateManyInput {
  create?: Maybe<FieldInstanceCreateInput[]>

  update?: Maybe<FieldInstanceUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<FieldInstanceUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<FieldInstanceWhereUniqueInput[]>

  connect?: Maybe<FieldInstanceWhereUniqueInput[]>

  disconnect?: Maybe<FieldInstanceWhereUniqueInput[]>

  deleteMany?: Maybe<FieldInstanceScalarWhereInput[]>

  updateMany?: Maybe<FieldInstanceUpdateManyWithWhereNestedInput[]>
}

export interface FieldInstanceUpdateWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput

  data: FieldInstanceUpdateDataInput
}

export interface FieldInstanceUpdateDataInput {
  field?: Maybe<FieldUpdateOneRequiredInput>

  value?: Maybe<string>
}

export interface FieldUpdateOneRequiredInput {
  create?: Maybe<FieldCreateInput>

  update?: Maybe<FieldUpdateDataInput>

  upsert?: Maybe<FieldUpsertNestedInput>

  connect?: Maybe<FieldWhereUniqueInput>
}

export interface FieldUpdateDataInput {
  type?: Maybe<FieldType>

  label?: Maybe<string>
}

export interface FieldUpsertNestedInput {
  update: FieldUpdateDataInput

  create: FieldCreateInput
}

export interface FieldInstanceUpsertWithWhereUniqueNestedInput {
  where: FieldInstanceWhereUniqueInput

  update: FieldInstanceUpdateDataInput

  create: FieldInstanceCreateInput
}

export interface FieldInstanceScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  value?: Maybe<string>

  value_not?: Maybe<string>

  value_in?: Maybe<string[]>

  value_not_in?: Maybe<string[]>

  value_lt?: Maybe<string>

  value_lte?: Maybe<string>

  value_gt?: Maybe<string>

  value_gte?: Maybe<string>

  value_contains?: Maybe<string>

  value_not_contains?: Maybe<string>

  value_starts_with?: Maybe<string>

  value_not_starts_with?: Maybe<string>

  value_ends_with?: Maybe<string>

  value_not_ends_with?: Maybe<string>

  AND?: Maybe<FieldInstanceScalarWhereInput[]>

  OR?: Maybe<FieldInstanceScalarWhereInput[]>

  NOT?: Maybe<FieldInstanceScalarWhereInput[]>
}

export interface FieldInstanceUpdateManyWithWhereNestedInput {
  where: FieldInstanceScalarWhereInput

  data: FieldInstanceUpdateManyDataInput
}

export interface FieldInstanceUpdateManyDataInput {
  value?: Maybe<string>
}

export interface ApplicationUpdateManyWithoutCandidateInput {
  create?: Maybe<ApplicationCreateWithoutCandidateInput[]>

  delete?: Maybe<ApplicationWhereUniqueInput[]>

  connect?: Maybe<ApplicationWhereUniqueInput[]>

  disconnect?: Maybe<ApplicationWhereUniqueInput[]>

  update?: Maybe<ApplicationUpdateWithWhereUniqueWithoutCandidateInput[]>

  upsert?: Maybe<ApplicationUpsertWithWhereUniqueWithoutCandidateInput[]>

  deleteMany?: Maybe<ApplicationScalarWhereInput[]>

  updateMany?: Maybe<ApplicationUpdateManyWithWhereNestedInput[]>
}

export interface ApplicationUpdateWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput

  data: ApplicationUpdateWithoutCandidateDataInput
}

export interface ApplicationUpdateWithoutCandidateDataInput {
  type?: Maybe<ApplicationType>

  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>

  stage?: Maybe<StageUpdateOneRequiredInput>

  job?: Maybe<JobUpdateOneRequiredWithoutApplicationsInput>
}

export interface StageUpdateOneRequiredInput {
  create?: Maybe<StageCreateInput>

  update?: Maybe<StageUpdateDataInput>

  upsert?: Maybe<StageUpsertNestedInput>

  connect?: Maybe<StageWhereUniqueInput>
}

export interface StageUpdateDataInput {
  name?: Maybe<string>

  description?: Maybe<string>

  type?: Maybe<StageType>
}

export interface StageUpsertNestedInput {
  update: StageUpdateDataInput

  create: StageCreateInput
}

export interface JobUpdateOneRequiredWithoutApplicationsInput {
  create?: Maybe<JobCreateWithoutApplicationsInput>

  update?: Maybe<JobUpdateWithoutApplicationsDataInput>

  upsert?: Maybe<JobUpsertWithoutApplicationsInput>

  connect?: Maybe<JobWhereUniqueInput>
}

export interface JobUpdateWithoutApplicationsDataInput {
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>

  workflow?: Maybe<WorkflowUpdateOneRequiredInput>

  comments?: Maybe<CommentUpdateManyInput>

  type?: Maybe<JobType>

  department?: Maybe<string>

  locations?: Maybe<LocationUpdateManyInput>

  name?: Maybe<string>

  description?: Maybe<string>

  requirements?: Maybe<string>
}

export interface WorkspaceUpdateOneRequiredWithoutJobsInput {
  create?: Maybe<WorkspaceCreateWithoutJobsInput>

  update?: Maybe<WorkspaceUpdateWithoutJobsDataInput>

  upsert?: Maybe<WorkspaceUpsertWithoutJobsInput>

  connect?: Maybe<WorkspaceWhereUniqueInput>
}

export interface WorkspaceUpdateWithoutJobsDataInput {
  users?: Maybe<UserUpdateManyInput>

  candidates?: Maybe<CandidateUpdateManyInput>

  workflows?: Maybe<WorkflowUpdateManyInput>

  invites?: Maybe<InviteUpdateManyInput>

  tags?: Maybe<TagUpdateManyInput>

  name?: Maybe<string>
}

export interface UserUpdateManyInput {
  create?: Maybe<UserCreateInput[]>

  update?: Maybe<UserUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<UserUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<UserWhereUniqueInput[]>

  connect?: Maybe<UserWhereUniqueInput[]>

  disconnect?: Maybe<UserWhereUniqueInput[]>

  deleteMany?: Maybe<UserScalarWhereInput[]>

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput

  data: UserUpdateDataInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput

  update: UserUpdateDataInput

  create: UserCreateInput
}

export interface UserScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  firstName?: Maybe<string>

  firstName_not?: Maybe<string>

  firstName_in?: Maybe<string[]>

  firstName_not_in?: Maybe<string[]>

  firstName_lt?: Maybe<string>

  firstName_lte?: Maybe<string>

  firstName_gt?: Maybe<string>

  firstName_gte?: Maybe<string>

  firstName_contains?: Maybe<string>

  firstName_not_contains?: Maybe<string>

  firstName_starts_with?: Maybe<string>

  firstName_not_starts_with?: Maybe<string>

  firstName_ends_with?: Maybe<string>

  firstName_not_ends_with?: Maybe<string>

  lastName?: Maybe<string>

  lastName_not?: Maybe<string>

  lastName_in?: Maybe<string[]>

  lastName_not_in?: Maybe<string[]>

  lastName_lt?: Maybe<string>

  lastName_lte?: Maybe<string>

  lastName_gt?: Maybe<string>

  lastName_gte?: Maybe<string>

  lastName_contains?: Maybe<string>

  lastName_not_contains?: Maybe<string>

  lastName_starts_with?: Maybe<string>

  lastName_not_starts_with?: Maybe<string>

  lastName_ends_with?: Maybe<string>

  lastName_not_ends_with?: Maybe<string>

  email?: Maybe<string>

  email_not?: Maybe<string>

  email_in?: Maybe<string[]>

  email_not_in?: Maybe<string[]>

  email_lt?: Maybe<string>

  email_lte?: Maybe<string>

  email_gt?: Maybe<string>

  email_gte?: Maybe<string>

  email_contains?: Maybe<string>

  email_not_contains?: Maybe<string>

  email_starts_with?: Maybe<string>

  email_not_starts_with?: Maybe<string>

  email_ends_with?: Maybe<string>

  email_not_ends_with?: Maybe<string>

  username?: Maybe<string>

  username_not?: Maybe<string>

  username_in?: Maybe<string[]>

  username_not_in?: Maybe<string[]>

  username_lt?: Maybe<string>

  username_lte?: Maybe<string>

  username_gt?: Maybe<string>

  username_gte?: Maybe<string>

  username_contains?: Maybe<string>

  username_not_contains?: Maybe<string>

  username_starts_with?: Maybe<string>

  username_not_starts_with?: Maybe<string>

  username_ends_with?: Maybe<string>

  username_not_ends_with?: Maybe<string>

  lastLogin?: Maybe<DateTime>

  lastLogin_not?: Maybe<DateTime>

  lastLogin_in?: Maybe<DateTime[]>

  lastLogin_not_in?: Maybe<DateTime[]>

  lastLogin_lt?: Maybe<DateTime>

  lastLogin_lte?: Maybe<DateTime>

  lastLogin_gt?: Maybe<DateTime>

  lastLogin_gte?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  deletedAt_not?: Maybe<DateTime>

  deletedAt_in?: Maybe<DateTime[]>

  deletedAt_not_in?: Maybe<DateTime[]>

  deletedAt_lt?: Maybe<DateTime>

  deletedAt_lte?: Maybe<DateTime>

  deletedAt_gt?: Maybe<DateTime>

  deletedAt_gte?: Maybe<DateTime>

  position?: Maybe<string>

  position_not?: Maybe<string>

  position_in?: Maybe<string[]>

  position_not_in?: Maybe<string[]>

  position_lt?: Maybe<string>

  position_lte?: Maybe<string>

  position_gt?: Maybe<string>

  position_gte?: Maybe<string>

  position_contains?: Maybe<string>

  position_not_contains?: Maybe<string>

  position_starts_with?: Maybe<string>

  position_not_starts_with?: Maybe<string>

  position_ends_with?: Maybe<string>

  position_not_ends_with?: Maybe<string>

  AND?: Maybe<UserScalarWhereInput[]>

  OR?: Maybe<UserScalarWhereInput[]>

  NOT?: Maybe<UserScalarWhereInput[]>
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput

  data: UserUpdateManyDataInput
}

export interface UserUpdateManyDataInput {
  firstName?: Maybe<string>

  lastName?: Maybe<string>

  email?: Maybe<string>

  username?: Maybe<string>

  lastLogin?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  position?: Maybe<string>
}

export interface CandidateUpdateManyInput {
  create?: Maybe<CandidateCreateInput[]>

  update?: Maybe<CandidateUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<CandidateUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<CandidateWhereUniqueInput[]>

  connect?: Maybe<CandidateWhereUniqueInput[]>

  disconnect?: Maybe<CandidateWhereUniqueInput[]>

  deleteMany?: Maybe<CandidateScalarWhereInput[]>

  updateMany?: Maybe<CandidateUpdateManyWithWhereNestedInput[]>
}

export interface CandidateUpdateWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput

  data: CandidateUpdateDataInput
}

export interface CandidateUpdateDataInput {
  firstName?: Maybe<string>

  lastName?: Maybe<string>

  emails?: Maybe<CandidateUpdateemailsInput>

  phones?: Maybe<CandidateUpdatephonesInput>

  links?: Maybe<CandidateUpdatelinksInput>

  avatar?: Maybe<FileUpdateOneInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateUpdateresumesStringInput>

  resumesFile?: Maybe<FileUpdateManyInput>

  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>

  coverLettersFile?: Maybe<FileUpdateManyInput>

  tags?: Maybe<TagUpdateManyInput>

  source?: Maybe<CandidateUpdatesourceInput>

  fields?: Maybe<FieldInstanceUpdateManyInput>

  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>

  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>

  comments?: Maybe<CommentUpdateManyInput>
}

export interface TaskUpdateManyWithoutCandidateInput {
  create?: Maybe<TaskCreateWithoutCandidateInput[]>

  delete?: Maybe<TaskWhereUniqueInput[]>

  connect?: Maybe<TaskWhereUniqueInput[]>

  disconnect?: Maybe<TaskWhereUniqueInput[]>

  update?: Maybe<TaskUpdateWithWhereUniqueWithoutCandidateInput[]>

  upsert?: Maybe<TaskUpsertWithWhereUniqueWithoutCandidateInput[]>

  deleteMany?: Maybe<TaskScalarWhereInput[]>

  updateMany?: Maybe<TaskUpdateManyWithWhereNestedInput[]>
}

export interface TaskUpdateWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput

  data: TaskUpdateWithoutCandidateDataInput
}

export interface TaskUpdateWithoutCandidateDataInput {
  owners?: Maybe<UserUpdateManyWithoutTasksInput>

  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface UserUpdateManyWithoutTasksInput {
  create?: Maybe<UserCreateWithoutTasksInput[]>

  delete?: Maybe<UserWhereUniqueInput[]>

  connect?: Maybe<UserWhereUniqueInput[]>

  disconnect?: Maybe<UserWhereUniqueInput[]>

  update?: Maybe<UserUpdateWithWhereUniqueWithoutTasksInput[]>

  upsert?: Maybe<UserUpsertWithWhereUniqueWithoutTasksInput[]>

  deleteMany?: Maybe<UserScalarWhereInput[]>

  updateMany?: Maybe<UserUpdateManyWithWhereNestedInput[]>
}

export interface UserUpdateWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput

  data: UserUpdateWithoutTasksDataInput
}

export interface UserUpdateWithoutTasksDataInput {
  firstName?: Maybe<string>

  lastName?: Maybe<string>

  email?: Maybe<string>

  username?: Maybe<string>

  lastLogin?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  position?: Maybe<string>

  avatar?: Maybe<FileUpdateOneInput>
}

export interface UserUpsertWithWhereUniqueWithoutTasksInput {
  where: UserWhereUniqueInput

  update: UserUpdateWithoutTasksDataInput

  create: UserCreateWithoutTasksInput
}

export interface TaskUpsertWithWhereUniqueWithoutCandidateInput {
  where: TaskWhereUniqueInput

  update: TaskUpdateWithoutCandidateDataInput

  create: TaskCreateWithoutCandidateInput
}

export interface TaskScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  title?: Maybe<string>

  title_not?: Maybe<string>

  title_in?: Maybe<string[]>

  title_not_in?: Maybe<string[]>

  title_lt?: Maybe<string>

  title_lte?: Maybe<string>

  title_gt?: Maybe<string>

  title_gte?: Maybe<string>

  title_contains?: Maybe<string>

  title_not_contains?: Maybe<string>

  title_starts_with?: Maybe<string>

  title_not_starts_with?: Maybe<string>

  title_ends_with?: Maybe<string>

  title_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  dueAt?: Maybe<DateTime>

  dueAt_not?: Maybe<DateTime>

  dueAt_in?: Maybe<DateTime[]>

  dueAt_not_in?: Maybe<DateTime[]>

  dueAt_lt?: Maybe<DateTime>

  dueAt_lte?: Maybe<DateTime>

  dueAt_gt?: Maybe<DateTime>

  dueAt_gte?: Maybe<DateTime>

  AND?: Maybe<TaskScalarWhereInput[]>

  OR?: Maybe<TaskScalarWhereInput[]>

  NOT?: Maybe<TaskScalarWhereInput[]>
}

export interface TaskUpdateManyWithWhereNestedInput {
  where: TaskScalarWhereInput

  data: TaskUpdateManyDataInput
}

export interface TaskUpdateManyDataInput {
  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface CommentUpdateManyInput {
  create?: Maybe<CommentCreateInput[]>

  update?: Maybe<CommentUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<CommentUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<CommentWhereUniqueInput[]>

  connect?: Maybe<CommentWhereUniqueInput[]>

  disconnect?: Maybe<CommentWhereUniqueInput[]>

  deleteMany?: Maybe<CommentScalarWhereInput[]>

  updateMany?: Maybe<CommentUpdateManyWithWhereNestedInput[]>
}

export interface CommentUpdateWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput

  data: CommentUpdateDataInput
}

export interface CommentUpdateDataInput {
  createdBy?: Maybe<UserUpdateOneRequiredInput>

  parent?: Maybe<CommentUpdateOneInput>

  content?: Maybe<string>
}

export interface CommentUpdateOneInput {
  create?: Maybe<CommentCreateInput>

  update?: Maybe<CommentUpdateDataInput>

  upsert?: Maybe<CommentUpsertNestedInput>

  delete?: Maybe<boolean>

  disconnect?: Maybe<boolean>

  connect?: Maybe<CommentWhereUniqueInput>
}

export interface CommentUpsertNestedInput {
  update: CommentUpdateDataInput

  create: CommentCreateInput
}

export interface CommentUpsertWithWhereUniqueNestedInput {
  where: CommentWhereUniqueInput

  update: CommentUpdateDataInput

  create: CommentCreateInput
}

export interface CommentScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  content?: Maybe<string>

  content_not?: Maybe<string>

  content_in?: Maybe<string[]>

  content_not_in?: Maybe<string[]>

  content_lt?: Maybe<string>

  content_lte?: Maybe<string>

  content_gt?: Maybe<string>

  content_gte?: Maybe<string>

  content_contains?: Maybe<string>

  content_not_contains?: Maybe<string>

  content_starts_with?: Maybe<string>

  content_not_starts_with?: Maybe<string>

  content_ends_with?: Maybe<string>

  content_not_ends_with?: Maybe<string>

  AND?: Maybe<CommentScalarWhereInput[]>

  OR?: Maybe<CommentScalarWhereInput[]>

  NOT?: Maybe<CommentScalarWhereInput[]>
}

export interface CommentUpdateManyWithWhereNestedInput {
  where: CommentScalarWhereInput

  data: CommentUpdateManyDataInput
}

export interface CommentUpdateManyDataInput {
  content?: Maybe<string>
}

export interface CandidateUpsertWithWhereUniqueNestedInput {
  where: CandidateWhereUniqueInput

  update: CandidateUpdateDataInput

  create: CandidateCreateInput
}

export interface CandidateScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  firstName?: Maybe<string>

  firstName_not?: Maybe<string>

  firstName_in?: Maybe<string[]>

  firstName_not_in?: Maybe<string[]>

  firstName_lt?: Maybe<string>

  firstName_lte?: Maybe<string>

  firstName_gt?: Maybe<string>

  firstName_gte?: Maybe<string>

  firstName_contains?: Maybe<string>

  firstName_not_contains?: Maybe<string>

  firstName_starts_with?: Maybe<string>

  firstName_not_starts_with?: Maybe<string>

  firstName_ends_with?: Maybe<string>

  firstName_not_ends_with?: Maybe<string>

  lastName?: Maybe<string>

  lastName_not?: Maybe<string>

  lastName_in?: Maybe<string[]>

  lastName_not_in?: Maybe<string[]>

  lastName_lt?: Maybe<string>

  lastName_lte?: Maybe<string>

  lastName_gt?: Maybe<string>

  lastName_gte?: Maybe<string>

  lastName_contains?: Maybe<string>

  lastName_not_contains?: Maybe<string>

  lastName_starts_with?: Maybe<string>

  lastName_not_starts_with?: Maybe<string>

  lastName_ends_with?: Maybe<string>

  lastName_not_ends_with?: Maybe<string>

  metaCompany?: Maybe<string>

  metaCompany_not?: Maybe<string>

  metaCompany_in?: Maybe<string[]>

  metaCompany_not_in?: Maybe<string[]>

  metaCompany_lt?: Maybe<string>

  metaCompany_lte?: Maybe<string>

  metaCompany_gt?: Maybe<string>

  metaCompany_gte?: Maybe<string>

  metaCompany_contains?: Maybe<string>

  metaCompany_not_contains?: Maybe<string>

  metaCompany_starts_with?: Maybe<string>

  metaCompany_not_starts_with?: Maybe<string>

  metaCompany_ends_with?: Maybe<string>

  metaCompany_not_ends_with?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaHeadline_not?: Maybe<string>

  metaHeadline_in?: Maybe<string[]>

  metaHeadline_not_in?: Maybe<string[]>

  metaHeadline_lt?: Maybe<string>

  metaHeadline_lte?: Maybe<string>

  metaHeadline_gt?: Maybe<string>

  metaHeadline_gte?: Maybe<string>

  metaHeadline_contains?: Maybe<string>

  metaHeadline_not_contains?: Maybe<string>

  metaHeadline_starts_with?: Maybe<string>

  metaHeadline_not_starts_with?: Maybe<string>

  metaHeadline_ends_with?: Maybe<string>

  metaHeadline_not_ends_with?: Maybe<string>

  metaPosition?: Maybe<string>

  metaPosition_not?: Maybe<string>

  metaPosition_in?: Maybe<string[]>

  metaPosition_not_in?: Maybe<string[]>

  metaPosition_lt?: Maybe<string>

  metaPosition_lte?: Maybe<string>

  metaPosition_gt?: Maybe<string>

  metaPosition_gte?: Maybe<string>

  metaPosition_contains?: Maybe<string>

  metaPosition_not_contains?: Maybe<string>

  metaPosition_starts_with?: Maybe<string>

  metaPosition_not_starts_with?: Maybe<string>

  metaPosition_ends_with?: Maybe<string>

  metaPosition_not_ends_with?: Maybe<string>

  AND?: Maybe<CandidateScalarWhereInput[]>

  OR?: Maybe<CandidateScalarWhereInput[]>

  NOT?: Maybe<CandidateScalarWhereInput[]>
}

export interface CandidateUpdateManyWithWhereNestedInput {
  where: CandidateScalarWhereInput

  data: CandidateUpdateManyDataInput
}

export interface CandidateUpdateManyDataInput {
  firstName?: Maybe<string>

  lastName?: Maybe<string>

  emails?: Maybe<CandidateUpdateemailsInput>

  phones?: Maybe<CandidateUpdatephonesInput>

  links?: Maybe<CandidateUpdatelinksInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateUpdateresumesStringInput>

  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>

  source?: Maybe<CandidateUpdatesourceInput>
}

export interface WorkflowUpdateManyInput {
  create?: Maybe<WorkflowCreateInput[]>

  update?: Maybe<WorkflowUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<WorkflowUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<WorkflowWhereUniqueInput[]>

  connect?: Maybe<WorkflowWhereUniqueInput[]>

  disconnect?: Maybe<WorkflowWhereUniqueInput[]>

  deleteMany?: Maybe<WorkflowScalarWhereInput[]>

  updateMany?: Maybe<WorkflowUpdateManyWithWhereNestedInput[]>
}

export interface WorkflowUpdateWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput

  data: WorkflowUpdateDataInput
}

export interface WorkflowUpdateDataInput {
  name?: Maybe<string>

  description?: Maybe<string>

  stages?: Maybe<StageUpdateManyInput>

  disqualifications?: Maybe<DisqualificationUpdateManyInput>

  fields?: Maybe<FieldUpdateManyInput>
}

export interface StageUpdateManyInput {
  create?: Maybe<StageCreateInput[]>

  update?: Maybe<StageUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<StageUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<StageWhereUniqueInput[]>

  connect?: Maybe<StageWhereUniqueInput[]>

  disconnect?: Maybe<StageWhereUniqueInput[]>

  deleteMany?: Maybe<StageScalarWhereInput[]>

  updateMany?: Maybe<StageUpdateManyWithWhereNestedInput[]>
}

export interface StageUpdateWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput

  data: StageUpdateDataInput
}

export interface StageUpsertWithWhereUniqueNestedInput {
  where: StageWhereUniqueInput

  update: StageUpdateDataInput

  create: StageCreateInput
}

export interface StageScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  type?: Maybe<StageType>

  type_not?: Maybe<StageType>

  type_in?: Maybe<StageType[]>

  type_not_in?: Maybe<StageType[]>

  AND?: Maybe<StageScalarWhereInput[]>

  OR?: Maybe<StageScalarWhereInput[]>

  NOT?: Maybe<StageScalarWhereInput[]>
}

export interface StageUpdateManyWithWhereNestedInput {
  where: StageScalarWhereInput

  data: StageUpdateManyDataInput
}

export interface StageUpdateManyDataInput {
  name?: Maybe<string>

  description?: Maybe<string>

  type?: Maybe<StageType>
}

export interface DisqualificationUpdateManyInput {
  create?: Maybe<DisqualificationCreateInput[]>

  update?: Maybe<DisqualificationUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<DisqualificationUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<DisqualificationWhereUniqueInput[]>

  connect?: Maybe<DisqualificationWhereUniqueInput[]>

  disconnect?: Maybe<DisqualificationWhereUniqueInput[]>

  deleteMany?: Maybe<DisqualificationScalarWhereInput[]>

  updateMany?: Maybe<DisqualificationUpdateManyWithWhereNestedInput[]>
}

export interface DisqualificationUpdateWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput

  data: DisqualificationUpdateDataInput
}

export interface DisqualificationUpsertWithWhereUniqueNestedInput {
  where: DisqualificationWhereUniqueInput

  update: DisqualificationUpdateDataInput

  create: DisqualificationCreateInput
}

export interface DisqualificationScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  AND?: Maybe<DisqualificationScalarWhereInput[]>

  OR?: Maybe<DisqualificationScalarWhereInput[]>

  NOT?: Maybe<DisqualificationScalarWhereInput[]>
}

export interface DisqualificationUpdateManyWithWhereNestedInput {
  where: DisqualificationScalarWhereInput

  data: DisqualificationUpdateManyDataInput
}

export interface DisqualificationUpdateManyDataInput {
  name?: Maybe<string>

  description?: Maybe<string>
}

export interface FieldUpdateManyInput {
  create?: Maybe<FieldCreateInput[]>

  update?: Maybe<FieldUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<FieldUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<FieldWhereUniqueInput[]>

  connect?: Maybe<FieldWhereUniqueInput[]>

  disconnect?: Maybe<FieldWhereUniqueInput[]>

  deleteMany?: Maybe<FieldScalarWhereInput[]>

  updateMany?: Maybe<FieldUpdateManyWithWhereNestedInput[]>
}

export interface FieldUpdateWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput

  data: FieldUpdateDataInput
}

export interface FieldUpsertWithWhereUniqueNestedInput {
  where: FieldWhereUniqueInput

  update: FieldUpdateDataInput

  create: FieldCreateInput
}

export interface FieldScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  type?: Maybe<FieldType>

  type_not?: Maybe<FieldType>

  type_in?: Maybe<FieldType[]>

  type_not_in?: Maybe<FieldType[]>

  label?: Maybe<string>

  label_not?: Maybe<string>

  label_in?: Maybe<string[]>

  label_not_in?: Maybe<string[]>

  label_lt?: Maybe<string>

  label_lte?: Maybe<string>

  label_gt?: Maybe<string>

  label_gte?: Maybe<string>

  label_contains?: Maybe<string>

  label_not_contains?: Maybe<string>

  label_starts_with?: Maybe<string>

  label_not_starts_with?: Maybe<string>

  label_ends_with?: Maybe<string>

  label_not_ends_with?: Maybe<string>

  AND?: Maybe<FieldScalarWhereInput[]>

  OR?: Maybe<FieldScalarWhereInput[]>

  NOT?: Maybe<FieldScalarWhereInput[]>
}

export interface FieldUpdateManyWithWhereNestedInput {
  where: FieldScalarWhereInput

  data: FieldUpdateManyDataInput
}

export interface FieldUpdateManyDataInput {
  type?: Maybe<FieldType>

  label?: Maybe<string>
}

export interface WorkflowUpsertWithWhereUniqueNestedInput {
  where: WorkflowWhereUniqueInput

  update: WorkflowUpdateDataInput

  create: WorkflowCreateInput
}

export interface WorkflowScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  name?: Maybe<string>

  name_not?: Maybe<string>

  name_in?: Maybe<string[]>

  name_not_in?: Maybe<string[]>

  name_lt?: Maybe<string>

  name_lte?: Maybe<string>

  name_gt?: Maybe<string>

  name_gte?: Maybe<string>

  name_contains?: Maybe<string>

  name_not_contains?: Maybe<string>

  name_starts_with?: Maybe<string>

  name_not_starts_with?: Maybe<string>

  name_ends_with?: Maybe<string>

  name_not_ends_with?: Maybe<string>

  description?: Maybe<string>

  description_not?: Maybe<string>

  description_in?: Maybe<string[]>

  description_not_in?: Maybe<string[]>

  description_lt?: Maybe<string>

  description_lte?: Maybe<string>

  description_gt?: Maybe<string>

  description_gte?: Maybe<string>

  description_contains?: Maybe<string>

  description_not_contains?: Maybe<string>

  description_starts_with?: Maybe<string>

  description_not_starts_with?: Maybe<string>

  description_ends_with?: Maybe<string>

  description_not_ends_with?: Maybe<string>

  AND?: Maybe<WorkflowScalarWhereInput[]>

  OR?: Maybe<WorkflowScalarWhereInput[]>

  NOT?: Maybe<WorkflowScalarWhereInput[]>
}

export interface WorkflowUpdateManyWithWhereNestedInput {
  where: WorkflowScalarWhereInput

  data: WorkflowUpdateManyDataInput
}

export interface WorkflowUpdateManyDataInput {
  name?: Maybe<string>

  description?: Maybe<string>
}

export interface InviteUpdateManyInput {
  create?: Maybe<InviteCreateInput[]>

  update?: Maybe<InviteUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<InviteUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<InviteWhereUniqueInput[]>

  connect?: Maybe<InviteWhereUniqueInput[]>

  disconnect?: Maybe<InviteWhereUniqueInput[]>

  deleteMany?: Maybe<InviteScalarWhereInput[]>

  updateMany?: Maybe<InviteUpdateManyWithWhereNestedInput[]>
}

export interface InviteUpdateWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput

  data: InviteUpdateDataInput
}

export interface InviteUpdateDataInput {
  email?: Maybe<string>

  expireAt?: Maybe<DateTime>

  invitedBy?: Maybe<UserUpdateOneRequiredInput>
}

export interface InviteUpsertWithWhereUniqueNestedInput {
  where: InviteWhereUniqueInput

  update: InviteUpdateDataInput

  create: InviteCreateInput
}

export interface InviteScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  email?: Maybe<string>

  email_not?: Maybe<string>

  email_in?: Maybe<string[]>

  email_not_in?: Maybe<string[]>

  email_lt?: Maybe<string>

  email_lte?: Maybe<string>

  email_gt?: Maybe<string>

  email_gte?: Maybe<string>

  email_contains?: Maybe<string>

  email_not_contains?: Maybe<string>

  email_starts_with?: Maybe<string>

  email_not_starts_with?: Maybe<string>

  email_ends_with?: Maybe<string>

  email_not_ends_with?: Maybe<string>

  expireAt?: Maybe<DateTime>

  expireAt_not?: Maybe<DateTime>

  expireAt_in?: Maybe<DateTime[]>

  expireAt_not_in?: Maybe<DateTime[]>

  expireAt_lt?: Maybe<DateTime>

  expireAt_lte?: Maybe<DateTime>

  expireAt_gt?: Maybe<DateTime>

  expireAt_gte?: Maybe<DateTime>

  AND?: Maybe<InviteScalarWhereInput[]>

  OR?: Maybe<InviteScalarWhereInput[]>

  NOT?: Maybe<InviteScalarWhereInput[]>
}

export interface InviteUpdateManyWithWhereNestedInput {
  where: InviteScalarWhereInput

  data: InviteUpdateManyDataInput
}

export interface InviteUpdateManyDataInput {
  email?: Maybe<string>

  expireAt?: Maybe<DateTime>
}

export interface WorkspaceUpsertWithoutJobsInput {
  update: WorkspaceUpdateWithoutJobsDataInput

  create: WorkspaceCreateWithoutJobsInput
}

export interface WorkflowUpdateOneRequiredInput {
  create?: Maybe<WorkflowCreateInput>

  update?: Maybe<WorkflowUpdateDataInput>

  upsert?: Maybe<WorkflowUpsertNestedInput>

  connect?: Maybe<WorkflowWhereUniqueInput>
}

export interface WorkflowUpsertNestedInput {
  update: WorkflowUpdateDataInput

  create: WorkflowCreateInput
}

export interface LocationUpdateManyInput {
  create?: Maybe<LocationCreateInput[]>

  update?: Maybe<LocationUpdateWithWhereUniqueNestedInput[]>

  upsert?: Maybe<LocationUpsertWithWhereUniqueNestedInput[]>

  delete?: Maybe<LocationWhereUniqueInput[]>

  connect?: Maybe<LocationWhereUniqueInput[]>

  disconnect?: Maybe<LocationWhereUniqueInput[]>

  deleteMany?: Maybe<LocationScalarWhereInput[]>

  updateMany?: Maybe<LocationUpdateManyWithWhereNestedInput[]>
}

export interface LocationUpdateWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput

  data: LocationUpdateDataInput
}

export interface LocationUpdateDataInput {
  country?: Maybe<string>

  region?: Maybe<string>

  city?: Maybe<string>

  zip?: Maybe<string>
}

export interface LocationUpsertWithWhereUniqueNestedInput {
  where: LocationWhereUniqueInput

  update: LocationUpdateDataInput

  create: LocationCreateInput
}

export interface LocationScalarWhereInput {
  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  country?: Maybe<string>

  country_not?: Maybe<string>

  country_in?: Maybe<string[]>

  country_not_in?: Maybe<string[]>

  country_lt?: Maybe<string>

  country_lte?: Maybe<string>

  country_gt?: Maybe<string>

  country_gte?: Maybe<string>

  country_contains?: Maybe<string>

  country_not_contains?: Maybe<string>

  country_starts_with?: Maybe<string>

  country_not_starts_with?: Maybe<string>

  country_ends_with?: Maybe<string>

  country_not_ends_with?: Maybe<string>

  region?: Maybe<string>

  region_not?: Maybe<string>

  region_in?: Maybe<string[]>

  region_not_in?: Maybe<string[]>

  region_lt?: Maybe<string>

  region_lte?: Maybe<string>

  region_gt?: Maybe<string>

  region_gte?: Maybe<string>

  region_contains?: Maybe<string>

  region_not_contains?: Maybe<string>

  region_starts_with?: Maybe<string>

  region_not_starts_with?: Maybe<string>

  region_ends_with?: Maybe<string>

  region_not_ends_with?: Maybe<string>

  city?: Maybe<string>

  city_not?: Maybe<string>

  city_in?: Maybe<string[]>

  city_not_in?: Maybe<string[]>

  city_lt?: Maybe<string>

  city_lte?: Maybe<string>

  city_gt?: Maybe<string>

  city_gte?: Maybe<string>

  city_contains?: Maybe<string>

  city_not_contains?: Maybe<string>

  city_starts_with?: Maybe<string>

  city_not_starts_with?: Maybe<string>

  city_ends_with?: Maybe<string>

  city_not_ends_with?: Maybe<string>

  zip?: Maybe<string>

  zip_not?: Maybe<string>

  zip_in?: Maybe<string[]>

  zip_not_in?: Maybe<string[]>

  zip_lt?: Maybe<string>

  zip_lte?: Maybe<string>

  zip_gt?: Maybe<string>

  zip_gte?: Maybe<string>

  zip_contains?: Maybe<string>

  zip_not_contains?: Maybe<string>

  zip_starts_with?: Maybe<string>

  zip_not_starts_with?: Maybe<string>

  zip_ends_with?: Maybe<string>

  zip_not_ends_with?: Maybe<string>

  AND?: Maybe<LocationScalarWhereInput[]>

  OR?: Maybe<LocationScalarWhereInput[]>

  NOT?: Maybe<LocationScalarWhereInput[]>
}

export interface LocationUpdateManyWithWhereNestedInput {
  where: LocationScalarWhereInput

  data: LocationUpdateManyDataInput
}

export interface LocationUpdateManyDataInput {
  country?: Maybe<string>

  region?: Maybe<string>

  city?: Maybe<string>

  zip?: Maybe<string>
}

export interface JobUpsertWithoutApplicationsInput {
  update: JobUpdateWithoutApplicationsDataInput

  create: JobCreateWithoutApplicationsInput
}

export interface ApplicationUpsertWithWhereUniqueWithoutCandidateInput {
  where: ApplicationWhereUniqueInput

  update: ApplicationUpdateWithoutCandidateDataInput

  create: ApplicationCreateWithoutCandidateInput
}

export interface ApplicationScalarWhereInput {
  createdAt?: Maybe<DateTime>

  createdAt_not?: Maybe<DateTime>

  createdAt_in?: Maybe<DateTime[]>

  createdAt_not_in?: Maybe<DateTime[]>

  createdAt_lt?: Maybe<DateTime>

  createdAt_lte?: Maybe<DateTime>

  createdAt_gt?: Maybe<DateTime>

  createdAt_gte?: Maybe<DateTime>

  id?: Maybe<string>

  id_not?: Maybe<string>

  id_in?: Maybe<string[]>

  id_not_in?: Maybe<string[]>

  id_lt?: Maybe<string>

  id_lte?: Maybe<string>

  id_gt?: Maybe<string>

  id_gte?: Maybe<string>

  id_contains?: Maybe<string>

  id_not_contains?: Maybe<string>

  id_starts_with?: Maybe<string>

  id_not_starts_with?: Maybe<string>

  id_ends_with?: Maybe<string>

  id_not_ends_with?: Maybe<string>

  updatedAt?: Maybe<DateTime>

  updatedAt_not?: Maybe<DateTime>

  updatedAt_in?: Maybe<DateTime[]>

  updatedAt_not_in?: Maybe<DateTime[]>

  updatedAt_lt?: Maybe<DateTime>

  updatedAt_lte?: Maybe<DateTime>

  updatedAt_gt?: Maybe<DateTime>

  updatedAt_gte?: Maybe<DateTime>

  type?: Maybe<ApplicationType>

  type_not?: Maybe<ApplicationType>

  type_in?: Maybe<ApplicationType[]>

  type_not_in?: Maybe<ApplicationType[]>

  AND?: Maybe<ApplicationScalarWhereInput[]>

  OR?: Maybe<ApplicationScalarWhereInput[]>

  NOT?: Maybe<ApplicationScalarWhereInput[]>
}

export interface ApplicationUpdateManyWithWhereNestedInput {
  where: ApplicationScalarWhereInput

  data: ApplicationUpdateManyDataInput
}

export interface ApplicationUpdateManyDataInput {
  type?: Maybe<ApplicationType>
}

export interface CandidateUpsertWithoutTasksInput {
  update: CandidateUpdateWithoutTasksDataInput

  create: CandidateCreateWithoutTasksInput
}

export interface TaskUpsertWithWhereUniqueWithoutOwnersInput {
  where: TaskWhereUniqueInput

  update: TaskUpdateWithoutOwnersDataInput

  create: TaskCreateWithoutOwnersInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput

  create: UserCreateInput
}

export interface DisqualificationInstanceUpsertNestedInput {
  update: DisqualificationInstanceUpdateDataInput

  create: DisqualificationInstanceCreateInput
}

export interface CandidateUpdateOneRequiredWithoutApplicationsInput {
  create?: Maybe<CandidateCreateWithoutApplicationsInput>

  update?: Maybe<CandidateUpdateWithoutApplicationsDataInput>

  upsert?: Maybe<CandidateUpsertWithoutApplicationsInput>

  connect?: Maybe<CandidateWhereUniqueInput>
}

export interface CandidateUpdateWithoutApplicationsDataInput {
  firstName?: Maybe<string>

  lastName?: Maybe<string>

  emails?: Maybe<CandidateUpdateemailsInput>

  phones?: Maybe<CandidateUpdatephonesInput>

  links?: Maybe<CandidateUpdatelinksInput>

  avatar?: Maybe<FileUpdateOneInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateUpdateresumesStringInput>

  resumesFile?: Maybe<FileUpdateManyInput>

  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>

  coverLettersFile?: Maybe<FileUpdateManyInput>

  tags?: Maybe<TagUpdateManyInput>

  source?: Maybe<CandidateUpdatesourceInput>

  fields?: Maybe<FieldInstanceUpdateManyInput>

  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>

  comments?: Maybe<CommentUpdateManyInput>
}

export interface CandidateUpsertWithoutApplicationsInput {
  update: CandidateUpdateWithoutApplicationsDataInput

  create: CandidateCreateWithoutApplicationsInput
}

export interface CandidateUpdateInput {
  firstName?: Maybe<string>

  lastName?: Maybe<string>

  emails?: Maybe<CandidateUpdateemailsInput>

  phones?: Maybe<CandidateUpdatephonesInput>

  links?: Maybe<CandidateUpdatelinksInput>

  avatar?: Maybe<FileUpdateOneInput>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString?: Maybe<CandidateUpdateresumesStringInput>

  resumesFile?: Maybe<FileUpdateManyInput>

  coverLettersString?: Maybe<CandidateUpdatecoverLettersStringInput>

  coverLettersFile?: Maybe<FileUpdateManyInput>

  tags?: Maybe<TagUpdateManyInput>

  source?: Maybe<CandidateUpdatesourceInput>

  fields?: Maybe<FieldInstanceUpdateManyInput>

  tasks?: Maybe<TaskUpdateManyWithoutCandidateInput>

  applications?: Maybe<ApplicationUpdateManyWithoutCandidateInput>

  comments?: Maybe<CommentUpdateManyInput>
}

export interface JobCreateInput {
  workspace: WorkspaceCreateOneWithoutJobsInput

  applications?: Maybe<ApplicationCreateManyWithoutJobInput>

  workflow: WorkflowCreateOneInput

  comments?: Maybe<CommentCreateManyInput>

  type: JobType

  department?: Maybe<string>

  locations?: Maybe<LocationCreateManyInput>

  name: string

  description?: Maybe<string>

  requirements?: Maybe<string>
}

export interface ApplicationCreateManyWithoutJobInput {
  create?: Maybe<ApplicationCreateWithoutJobInput[]>

  connect?: Maybe<ApplicationWhereUniqueInput[]>
}

export interface ApplicationCreateWithoutJobInput {
  type: ApplicationType

  disqualification?: Maybe<DisqualificationInstanceCreateOneInput>

  stage: StageCreateOneInput

  candidate: CandidateCreateOneWithoutApplicationsInput
}

export interface JobUpdateInput {
  workspace?: Maybe<WorkspaceUpdateOneRequiredWithoutJobsInput>

  applications?: Maybe<ApplicationUpdateManyWithoutJobInput>

  workflow?: Maybe<WorkflowUpdateOneRequiredInput>

  comments?: Maybe<CommentUpdateManyInput>

  type?: Maybe<JobType>

  department?: Maybe<string>

  locations?: Maybe<LocationUpdateManyInput>

  name?: Maybe<string>

  description?: Maybe<string>

  requirements?: Maybe<string>
}

export interface ApplicationUpdateManyWithoutJobInput {
  create?: Maybe<ApplicationCreateWithoutJobInput[]>

  delete?: Maybe<ApplicationWhereUniqueInput[]>

  connect?: Maybe<ApplicationWhereUniqueInput[]>

  disconnect?: Maybe<ApplicationWhereUniqueInput[]>

  update?: Maybe<ApplicationUpdateWithWhereUniqueWithoutJobInput[]>

  upsert?: Maybe<ApplicationUpsertWithWhereUniqueWithoutJobInput[]>

  deleteMany?: Maybe<ApplicationScalarWhereInput[]>

  updateMany?: Maybe<ApplicationUpdateManyWithWhereNestedInput[]>
}

export interface ApplicationUpdateWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput

  data: ApplicationUpdateWithoutJobDataInput
}

export interface ApplicationUpdateWithoutJobDataInput {
  type?: Maybe<ApplicationType>

  disqualification?: Maybe<DisqualificationInstanceUpdateOneInput>

  stage?: Maybe<StageUpdateOneRequiredInput>

  candidate?: Maybe<CandidateUpdateOneRequiredWithoutApplicationsInput>
}

export interface ApplicationUpsertWithWhereUniqueWithoutJobInput {
  where: ApplicationWhereUniqueInput

  update: ApplicationUpdateWithoutJobDataInput

  create: ApplicationCreateWithoutJobInput
}

export interface TagUpdateInput {
  label?: Maybe<string>
}

export interface TaskCreateInput {
  owners?: Maybe<UserCreateManyWithoutTasksInput>

  candidate?: Maybe<CandidateCreateOneWithoutTasksInput>

  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface TaskUpdateInput {
  owners?: Maybe<UserUpdateManyWithoutTasksInput>

  candidate?: Maybe<CandidateUpdateOneWithoutTasksInput>

  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface Connect {
  connect?: Maybe<WhereUniqueInput>
}

export interface WhereUniqueInput {
  id: string
}

export interface ConnectDisconnect {
  connect?: Maybe<WhereUniqueInput>

  disconnect?: Maybe<WhereUniqueInput>
}

export interface ConnectDisconnectMany {
  connect?: Maybe<WhereUniqueInput[]>

  disconnect?: Maybe<WhereUniqueInput[]>
}

export interface ConnectMany {
  connect?: Maybe<WhereUniqueInput[]>
}

export interface LoginInput {
  email: string

  password: string
}

export interface RefreshInput {
  token: string
}

export interface SignupInput {
  password: string

  username: string

  inviteId: string
}

export interface WorkspaceCreateInput {
  name: string

  firstName?: Maybe<string>

  lastName?: Maybe<string>

  email: string

  username: string

  password: string
}

export enum ApplicationType {
  Qualified = 'Qualified',
  Disqualified = 'Disqualified',
}

export enum FieldType {
  Int = 'Int',
  Float = 'Float',
  String = 'String',
  Text = 'Text',
  Paragraph = 'Paragraph',
  Boolean = 'Boolean',
  DateTime = 'DateTime',
}

export enum StageType {
  New = 'New',
  Pipeline = 'Pipeline',
  Final = 'Final',
}

export enum JobType {
  Draft = 'Draft',
  Published = 'Published',
  Archived = 'Archived',
}

export enum TaskOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DueAtAsc = 'dueAt_ASC',
  DueAtDesc = 'dueAt_DESC',
}

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
  LastLoginAsc = 'lastLogin_ASC',
  LastLoginDesc = 'lastLogin_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
}

export enum FileOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
}

export enum FieldInstanceOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ValueAsc = 'value_ASC',
  ValueDesc = 'value_DESC',
}

export enum ApplicationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export enum CommentOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
}

export enum JobOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  DepartmentAsc = 'department_ASC',
  DepartmentDesc = 'department_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  RequirementsAsc = 'requirements_ASC',
  RequirementsDesc = 'requirements_DESC',
}

export enum CandidateOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  FirstNameAsc = 'firstName_ASC',
  FirstNameDesc = 'firstName_DESC',
  LastNameAsc = 'lastName_ASC',
  LastNameDesc = 'lastName_DESC',
  MetaCompanyAsc = 'metaCompany_ASC',
  MetaCompanyDesc = 'metaCompany_DESC',
  MetaHeadlineAsc = 'metaHeadline_ASC',
  MetaHeadlineDesc = 'metaHeadline_DESC',
  MetaPositionAsc = 'metaPosition_ASC',
  MetaPositionDesc = 'metaPosition_DESC',
}

export enum WorkflowOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
}

export enum StageOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
}

export enum DisqualificationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
}

export enum FieldOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
}

export enum InviteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  ExpireAtAsc = 'expireAt_ASC',
  ExpireAtDesc = 'expireAt_DESC',
}

export enum LocationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  RegionAsc = 'region_ASC',
  RegionDesc = 'region_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  ZipAsc = 'zip_ASC',
  ZipDesc = 'zip_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type DateTime = any

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  application?: Maybe<Application>

  applications: (Maybe<Application>)[]

  applicationsConnection: ApplicationConnection

  candidate?: Maybe<Candidate>

  candidates: (Maybe<Candidate>)[]

  candidatesConnection: CandidateConnection

  job?: Maybe<Job>

  jobs: (Maybe<Job>)[]

  jobsConnection: JobConnection

  tag?: Maybe<Tag>

  tags: (Maybe<Tag>)[]

  tagsConnection: TagConnection

  task?: Maybe<Task>

  tasks: (Maybe<Task>)[]

  tasksConnection: TaskConnection

  user?: Maybe<User>

  users: (Maybe<User>)[]

  usersConnection: UserConnection
}

export interface Application {
  createdAt: DateTime

  id: string

  updatedAt: DateTime

  type: ApplicationType

  disqualification?: Maybe<DisqualificationInstance>

  stage: Stage

  job: Job

  candidate: Candidate
}

export interface DisqualificationInstance {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  disqualification: Disqualification

  createdBy: User

  content?: Maybe<string>
}

export interface Disqualification {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  name: string

  description?: Maybe<string>
}

export interface User {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  tasks?: Maybe<Task[]>

  firstName: string

  lastName: string

  email: string

  username: string

  lastLogin?: Maybe<DateTime>

  deletedAt?: Maybe<DateTime>

  position?: Maybe<string>

  avatar?: Maybe<File>
}

export interface Task {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  owners?: Maybe<User[]>

  candidate?: Maybe<Candidate>

  title?: Maybe<string>

  description?: Maybe<string>

  dueAt?: Maybe<DateTime>
}

export interface Candidate {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  firstName: string

  lastName: string

  emails: string[]

  phones: string[]

  links: string[]

  avatar?: Maybe<File>

  metaCompany?: Maybe<string>

  metaHeadline?: Maybe<string>

  metaPosition?: Maybe<string>

  resumesString: string[]

  resumesFile?: Maybe<File[]>

  coverLettersString: string[]

  coverLettersFile?: Maybe<File[]>

  tags?: Maybe<Tag[]>

  source: string[]

  fields?: Maybe<FieldInstance[]>

  tasks?: Maybe<Task[]>

  applications?: Maybe<Application[]>

  comments?: Maybe<Comment[]>
}

export interface File {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  size: number

  type: string

  name: string

  url: string
}

export interface Tag {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  label: string
}

export interface FieldInstance {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  field: Field

  value?: Maybe<string>
}

export interface Field {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  type: FieldType

  label: string
}

export interface Comment {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  createdBy: User

  parent?: Maybe<Comment>

  content: string
}

export interface Stage {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  name: string

  description?: Maybe<string>

  type: StageType
}

export interface Job {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  workspace: Workspace

  applications?: Maybe<Application[]>

  workflow: Workflow

  comments?: Maybe<Comment[]>

  type: JobType

  department?: Maybe<string>

  locations?: Maybe<Location[]>

  name: string

  description?: Maybe<string>

  requirements?: Maybe<string>
}

export interface Workspace {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  users?: Maybe<User[]>

  jobs?: Maybe<Job[]>

  candidates?: Maybe<Candidate[]>

  workflows?: Maybe<Workflow[]>

  invites?: Maybe<Invite[]>

  tags?: Maybe<Tag[]>

  name: string
}

export interface Workflow {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  name: string

  description?: Maybe<string>

  stages?: Maybe<Stage[]>

  disqualifications?: Maybe<Disqualification[]>

  fields?: Maybe<Field[]>
}

export interface Invite {
  id: string

  createdAt: DateTime

  updatedAt: DateTime

  email: string

  expireAt: DateTime

  invitedBy: User
}

export interface Location {
  id: string

  country: string

  region: string

  city: string

  zip: string
}

export interface ApplicationConnection {
  pageInfo: PageInfo

  edges: (Maybe<ApplicationEdge>)[]

  aggregate: AggregateApplication
}

export interface PageInfo {
  hasNextPage: boolean

  hasPreviousPage: boolean

  startCursor?: Maybe<string>

  endCursor?: Maybe<string>
}

export interface ApplicationEdge {
  node: Application

  cursor: string
}

export interface AggregateApplication {
  count: number
}

export interface CandidateConnection {
  pageInfo: PageInfo

  edges: (Maybe<CandidateEdge>)[]

  aggregate: AggregateCandidate
}

export interface CandidateEdge {
  node: Candidate

  cursor: string
}

export interface AggregateCandidate {
  count: number
}

export interface JobConnection {
  pageInfo: PageInfo

  edges: (Maybe<JobEdge>)[]

  aggregate: AggregateJob
}

export interface JobEdge {
  node: Job

  cursor: string
}

export interface AggregateJob {
  count: number
}

export interface TagConnection {
  pageInfo: PageInfo

  edges: (Maybe<TagEdge>)[]

  aggregate: AggregateTag
}

export interface TagEdge {
  node: Tag

  cursor: string
}

export interface AggregateTag {
  count: number
}

export interface TaskConnection {
  pageInfo: PageInfo

  edges: (Maybe<TaskEdge>)[]

  aggregate: AggregateTask
}

export interface TaskEdge {
  node: Task

  cursor: string
}

export interface AggregateTask {
  count: number
}

export interface UserConnection {
  pageInfo: PageInfo

  edges: (Maybe<UserEdge>)[]

  aggregate: AggregateUser
}

export interface UserEdge {
  node: User

  cursor: string
}

export interface AggregateUser {
  count: number
}

export interface Mutation {
  createApplication: Application

  updateApplication?: Maybe<Application>

  upsertApplication: Application

  deleteApplication?: Maybe<Application>

  createCandidate: Candidate

  updateCandidate?: Maybe<Candidate>

  upsertCandidate: Candidate

  deleteCandidate?: Maybe<Candidate>

  createJob: Job

  updateJob?: Maybe<Job>

  upsertJob: Job

  deleteJob?: Maybe<Job>

  createTag: Tag

  updateTag?: Maybe<Tag>

  upsertTag: Tag

  deleteTag?: Maybe<Tag>

  createTask: Task

  updateTask?: Maybe<Task>

  upsertTask: Task

  deleteTask?: Maybe<Task>
}

export interface AccessPayload {
  token: string
}

export interface AuthPayload {
  token: string

  refresh: string
}

// ====================================================
// Arguments
// ====================================================

export interface ApplicationQueryArgs {
  where: ApplicationWhereUniqueInput
}
export interface ApplicationsQueryArgs {
  where?: Maybe<ApplicationWhereInput>

  orderBy?: Maybe<ApplicationOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface ApplicationsConnectionQueryArgs {
  where?: Maybe<ApplicationWhereInput>

  orderBy?: Maybe<ApplicationOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface CandidateQueryArgs {
  where: CandidateWhereUniqueInput
}
export interface CandidatesQueryArgs {
  where?: Maybe<CandidateWhereInput>

  orderBy?: Maybe<CandidateOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface CandidatesConnectionQueryArgs {
  where?: Maybe<CandidateWhereInput>

  orderBy?: Maybe<CandidateOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface JobQueryArgs {
  where: JobWhereUniqueInput
}
export interface JobsQueryArgs {
  where?: Maybe<JobWhereInput>

  orderBy?: Maybe<JobOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface JobsConnectionQueryArgs {
  where?: Maybe<JobWhereInput>

  orderBy?: Maybe<JobOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TagQueryArgs {
  where: TagWhereUniqueInput
}
export interface TagsQueryArgs {
  where?: Maybe<TagWhereInput>

  orderBy?: Maybe<TagOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TagsConnectionQueryArgs {
  where?: Maybe<TagWhereInput>

  orderBy?: Maybe<TagOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TaskQueryArgs {
  where: TaskWhereUniqueInput
}
export interface TasksQueryArgs {
  where?: Maybe<TaskWhereInput>

  orderBy?: Maybe<TaskOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TasksConnectionQueryArgs {
  where?: Maybe<TaskWhereInput>

  orderBy?: Maybe<TaskOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface UserQueryArgs {
  where: UserWhereUniqueInput
}
export interface UsersQueryArgs {
  where?: Maybe<UserWhereInput>

  orderBy?: Maybe<UserOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface UsersConnectionQueryArgs {
  where?: Maybe<UserWhereInput>

  orderBy?: Maybe<UserOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TasksUserArgs {
  where?: Maybe<TaskWhereInput>

  orderBy?: Maybe<TaskOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface OwnersTaskArgs {
  where?: Maybe<UserWhereInput>

  orderBy?: Maybe<UserOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface ResumesFileCandidateArgs {
  where?: Maybe<FileWhereInput>

  orderBy?: Maybe<FileOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface CoverLettersFileCandidateArgs {
  where?: Maybe<FileWhereInput>

  orderBy?: Maybe<FileOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TagsCandidateArgs {
  where?: Maybe<TagWhereInput>

  orderBy?: Maybe<TagOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface FieldsCandidateArgs {
  where?: Maybe<FieldInstanceWhereInput>

  orderBy?: Maybe<FieldInstanceOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TasksCandidateArgs {
  where?: Maybe<TaskWhereInput>

  orderBy?: Maybe<TaskOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface ApplicationsCandidateArgs {
  where?: Maybe<ApplicationWhereInput>

  orderBy?: Maybe<ApplicationOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface CommentsCandidateArgs {
  where?: Maybe<CommentWhereInput>

  orderBy?: Maybe<CommentOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface ApplicationsJobArgs {
  where?: Maybe<ApplicationWhereInput>

  orderBy?: Maybe<ApplicationOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface CommentsJobArgs {
  where?: Maybe<CommentWhereInput>

  orderBy?: Maybe<CommentOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface LocationsJobArgs {
  where?: Maybe<LocationWhereInput>

  orderBy?: Maybe<LocationOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface UsersWorkspaceArgs {
  where?: Maybe<UserWhereInput>

  orderBy?: Maybe<UserOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface JobsWorkspaceArgs {
  where?: Maybe<JobWhereInput>

  orderBy?: Maybe<JobOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface CandidatesWorkspaceArgs {
  where?: Maybe<CandidateWhereInput>

  orderBy?: Maybe<CandidateOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface WorkflowsWorkspaceArgs {
  where?: Maybe<WorkflowWhereInput>

  orderBy?: Maybe<WorkflowOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface InvitesWorkspaceArgs {
  where?: Maybe<InviteWhereInput>

  orderBy?: Maybe<InviteOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface TagsWorkspaceArgs {
  where?: Maybe<TagWhereInput>

  orderBy?: Maybe<TagOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface StagesWorkflowArgs {
  where?: Maybe<StageWhereInput>

  orderBy?: Maybe<StageOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface DisqualificationsWorkflowArgs {
  where?: Maybe<DisqualificationWhereInput>

  orderBy?: Maybe<DisqualificationOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface FieldsWorkflowArgs {
  where?: Maybe<FieldWhereInput>

  orderBy?: Maybe<FieldOrderByInput>

  skip?: Maybe<number>

  after?: Maybe<string>

  before?: Maybe<string>

  first?: Maybe<number>

  last?: Maybe<number>
}
export interface CreateApplicationMutationArgs {
  data: ApplicationCreateInput
}
export interface UpdateApplicationMutationArgs {
  data: ApplicationUpdateInput

  where: ApplicationWhereUniqueInput
}
export interface UpsertApplicationMutationArgs {
  where: ApplicationWhereUniqueInput

  create: ApplicationCreateInput

  update: ApplicationUpdateInput
}
export interface DeleteApplicationMutationArgs {
  where: ApplicationWhereUniqueInput
}
export interface CreateCandidateMutationArgs {
  data: CandidateCreateInput
}
export interface UpdateCandidateMutationArgs {
  data: CandidateUpdateInput

  where: CandidateWhereUniqueInput
}
export interface UpsertCandidateMutationArgs {
  where: CandidateWhereUniqueInput

  create: CandidateCreateInput

  update: CandidateUpdateInput
}
export interface DeleteCandidateMutationArgs {
  where: CandidateWhereUniqueInput
}
export interface CreateJobMutationArgs {
  data: JobCreateInput
}
export interface UpdateJobMutationArgs {
  data: JobUpdateInput

  where: JobWhereUniqueInput
}
export interface UpsertJobMutationArgs {
  where: JobWhereUniqueInput

  create: JobCreateInput

  update: JobUpdateInput
}
export interface DeleteJobMutationArgs {
  where: JobWhereUniqueInput
}
export interface CreateTagMutationArgs {
  data: TagCreateInput
}
export interface UpdateTagMutationArgs {
  data: TagUpdateInput

  where: TagWhereUniqueInput
}
export interface UpsertTagMutationArgs {
  where: TagWhereUniqueInput

  create: TagCreateInput

  update: TagUpdateInput
}
export interface DeleteTagMutationArgs {
  where: TagWhereUniqueInput
}
export interface CreateTaskMutationArgs {
  data: TaskCreateInput
}
export interface UpdateTaskMutationArgs {
  data: TaskUpdateInput

  where: TaskWhereUniqueInput
}
export interface UpsertTaskMutationArgs {
  where: TaskWhereUniqueInput

  create: TaskCreateInput

  update: TaskUpdateInput
}
export interface DeleteTaskMutationArgs {
  where: TaskWhereUniqueInput
}

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql'

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo,
) => Promise<Result> | Result

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo,
  ): R | Result | Promise<R | Result>
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo,
) => Maybe<Types>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export namespace QueryResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    application?: ApplicationResolver<Maybe<Application>, TypeParent, Context>

    applications?: ApplicationsResolver<(Maybe<Application>)[], TypeParent, Context>

    applicationsConnection?: ApplicationsConnectionResolver<
      ApplicationConnection,
      TypeParent,
      Context
    >

    candidate?: CandidateResolver<Maybe<Candidate>, TypeParent, Context>

    candidates?: CandidatesResolver<(Maybe<Candidate>)[], TypeParent, Context>

    candidatesConnection?: CandidatesConnectionResolver<CandidateConnection, TypeParent, Context>

    job?: JobResolver<Maybe<Job>, TypeParent, Context>

    jobs?: JobsResolver<(Maybe<Job>)[], TypeParent, Context>

    jobsConnection?: JobsConnectionResolver<JobConnection, TypeParent, Context>

    tag?: TagResolver<Maybe<Tag>, TypeParent, Context>

    tags?: TagsResolver<(Maybe<Tag>)[], TypeParent, Context>

    tagsConnection?: TagsConnectionResolver<TagConnection, TypeParent, Context>

    task?: TaskResolver<Maybe<Task>, TypeParent, Context>

    tasks?: TasksResolver<(Maybe<Task>)[], TypeParent, Context>

    tasksConnection?: TasksConnectionResolver<TaskConnection, TypeParent, Context>

    user?: UserResolver<Maybe<User>, TypeParent, Context>

    users?: UsersResolver<(Maybe<User>)[], TypeParent, Context>

    usersConnection?: UsersConnectionResolver<UserConnection, TypeParent, Context>
  }

  export type ApplicationResolver<R = Maybe<Application>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    ApplicationArgs
  >
  export interface ApplicationArgs {
    where: ApplicationWhereUniqueInput
  }

  export type ApplicationsResolver<
    R = (Maybe<Application>)[],
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ApplicationsArgs>
  export interface ApplicationsArgs {
    where?: Maybe<ApplicationWhereInput>

    orderBy?: Maybe<ApplicationOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type ApplicationsConnectionResolver<
    R = ApplicationConnection,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, ApplicationsConnectionArgs>
  export interface ApplicationsConnectionArgs {
    where?: Maybe<ApplicationWhereInput>

    orderBy?: Maybe<ApplicationOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type CandidateResolver<R = Maybe<Candidate>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CandidateArgs
  >
  export interface CandidateArgs {
    where: CandidateWhereUniqueInput
  }

  export type CandidatesResolver<R = (Maybe<Candidate>)[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CandidatesArgs
  >
  export interface CandidatesArgs {
    where?: Maybe<CandidateWhereInput>

    orderBy?: Maybe<CandidateOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type CandidatesConnectionResolver<
    R = CandidateConnection,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, CandidatesConnectionArgs>
  export interface CandidatesConnectionArgs {
    where?: Maybe<CandidateWhereInput>

    orderBy?: Maybe<CandidateOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type JobResolver<R = Maybe<Job>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    JobArgs
  >
  export interface JobArgs {
    where: JobWhereUniqueInput
  }

  export type JobsResolver<R = (Maybe<Job>)[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    JobsArgs
  >
  export interface JobsArgs {
    where?: Maybe<JobWhereInput>

    orderBy?: Maybe<JobOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type JobsConnectionResolver<R = JobConnection, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    JobsConnectionArgs
  >
  export interface JobsConnectionArgs {
    where?: Maybe<JobWhereInput>

    orderBy?: Maybe<JobOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TagResolver<R = Maybe<Tag>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TagArgs
  >
  export interface TagArgs {
    where: TagWhereUniqueInput
  }

  export type TagsResolver<R = (Maybe<Tag>)[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TagsArgs
  >
  export interface TagsArgs {
    where?: Maybe<TagWhereInput>

    orderBy?: Maybe<TagOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TagsConnectionResolver<R = TagConnection, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TagsConnectionArgs
  >
  export interface TagsConnectionArgs {
    where?: Maybe<TagWhereInput>

    orderBy?: Maybe<TagOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TaskResolver<R = Maybe<Task>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TaskArgs
  >
  export interface TaskArgs {
    where: TaskWhereUniqueInput
  }

  export type TasksResolver<R = (Maybe<Task>)[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TasksArgs
  >
  export interface TasksArgs {
    where?: Maybe<TaskWhereInput>

    orderBy?: Maybe<TaskOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TasksConnectionResolver<R = TaskConnection, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TasksConnectionArgs
  >
  export interface TasksConnectionArgs {
    where?: Maybe<TaskWhereInput>

    orderBy?: Maybe<TaskOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type UserResolver<R = Maybe<User>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UserArgs
  >
  export interface UserArgs {
    where: UserWhereUniqueInput
  }

  export type UsersResolver<R = (Maybe<User>)[], Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UsersArgs
  >
  export interface UsersArgs {
    where?: Maybe<UserWhereInput>

    orderBy?: Maybe<UserOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type UsersConnectionResolver<R = UserConnection, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UsersConnectionArgs
  >
  export interface UsersConnectionArgs {
    where?: Maybe<UserWhereInput>

    orderBy?: Maybe<UserOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }
}

export namespace ApplicationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Application> {
    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    id?: IdResolver<string, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    type?: TypeResolver<ApplicationType, TypeParent, Context>

    disqualification?: DisqualificationResolver<
      Maybe<DisqualificationInstance>,
      TypeParent,
      Context
    >

    stage?: StageResolver<Stage, TypeParent, Context>

    job?: JobResolver<Job, TypeParent, Context>

    candidate?: CandidateResolver<Candidate, TypeParent, Context>
  }

  export type CreatedAtResolver<R = DateTime, Parent = Application, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type IdResolver<R = string, Parent = Application, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Application, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type TypeResolver<R = ApplicationType, Parent = Application, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type DisqualificationResolver<
    R = Maybe<DisqualificationInstance>,
    Parent = Application,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type StageResolver<R = Stage, Parent = Application, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type JobResolver<R = Job, Parent = Application, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CandidateResolver<R = Candidate, Parent = Application, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace DisqualificationInstanceResolvers {
  export interface Resolvers<Context = {}, TypeParent = DisqualificationInstance> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    disqualification?: DisqualificationResolver<Disqualification, TypeParent, Context>

    createdBy?: CreatedByResolver<User, TypeParent, Context>

    content?: ContentResolver<Maybe<string>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = DisqualificationInstance, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CreatedAtResolver<
    R = DateTime,
    Parent = DisqualificationInstance,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type UpdatedAtResolver<
    R = DateTime,
    Parent = DisqualificationInstance,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type DisqualificationResolver<
    R = Disqualification,
    Parent = DisqualificationInstance,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type CreatedByResolver<
    R = User,
    Parent = DisqualificationInstance,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type ContentResolver<
    R = Maybe<string>,
    Parent = DisqualificationInstance,
    Context = {}
  > = Resolver<R, Parent, Context>
}

export namespace DisqualificationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Disqualification> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    name?: NameResolver<string, TypeParent, Context>

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Disqualification, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CreatedAtResolver<R = DateTime, Parent = Disqualification, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Disqualification, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type NameResolver<R = string, Parent = Disqualification, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type DescriptionResolver<
    R = Maybe<string>,
    Parent = Disqualification,
    Context = {}
  > = Resolver<R, Parent, Context>
}

export namespace UserResolvers {
  export interface Resolvers<Context = {}, TypeParent = User> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    tasks?: TasksResolver<Maybe<Task[]>, TypeParent, Context>

    firstName?: FirstNameResolver<string, TypeParent, Context>

    lastName?: LastNameResolver<string, TypeParent, Context>

    email?: EmailResolver<string, TypeParent, Context>

    username?: UsernameResolver<string, TypeParent, Context>

    lastLogin?: LastLoginResolver<Maybe<DateTime>, TypeParent, Context>

    deletedAt?: DeletedAtResolver<Maybe<DateTime>, TypeParent, Context>

    position?: PositionResolver<Maybe<string>, TypeParent, Context>

    avatar?: AvatarResolver<Maybe<File>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type TasksResolver<R = Maybe<Task[]>, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TasksArgs
  >
  export interface TasksArgs {
    where?: Maybe<TaskWhereInput>

    orderBy?: Maybe<TaskOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type FirstNameResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type LastNameResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EmailResolver<R = string, Parent = User, Context = {}> = Resolver<R, Parent, Context>
  export type UsernameResolver<R = string, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type LastLoginResolver<R = Maybe<DateTime>, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type DeletedAtResolver<R = Maybe<DateTime>, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type PositionResolver<R = Maybe<string>, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type AvatarResolver<R = Maybe<File>, Parent = User, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace TaskResolvers {
  export interface Resolvers<Context = {}, TypeParent = Task> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    owners?: OwnersResolver<Maybe<User[]>, TypeParent, Context>

    candidate?: CandidateResolver<Maybe<Candidate>, TypeParent, Context>

    title?: TitleResolver<Maybe<string>, TypeParent, Context>

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>

    dueAt?: DueAtResolver<Maybe<DateTime>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Task, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Task, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Task, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type OwnersResolver<R = Maybe<User[]>, Parent = Task, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    OwnersArgs
  >
  export interface OwnersArgs {
    where?: Maybe<UserWhereInput>

    orderBy?: Maybe<UserOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type CandidateResolver<R = Maybe<Candidate>, Parent = Task, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type TitleResolver<R = Maybe<string>, Parent = Task, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type DescriptionResolver<R = Maybe<string>, Parent = Task, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type DueAtResolver<R = Maybe<DateTime>, Parent = Task, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace CandidateResolvers {
  export interface Resolvers<Context = {}, TypeParent = Candidate> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    firstName?: FirstNameResolver<string, TypeParent, Context>

    lastName?: LastNameResolver<string, TypeParent, Context>

    emails?: EmailsResolver<string[], TypeParent, Context>

    phones?: PhonesResolver<string[], TypeParent, Context>

    links?: LinksResolver<string[], TypeParent, Context>

    avatar?: AvatarResolver<Maybe<File>, TypeParent, Context>

    metaCompany?: MetaCompanyResolver<Maybe<string>, TypeParent, Context>

    metaHeadline?: MetaHeadlineResolver<Maybe<string>, TypeParent, Context>

    metaPosition?: MetaPositionResolver<Maybe<string>, TypeParent, Context>

    resumesString?: ResumesStringResolver<string[], TypeParent, Context>

    resumesFile?: ResumesFileResolver<Maybe<File[]>, TypeParent, Context>

    coverLettersString?: CoverLettersStringResolver<string[], TypeParent, Context>

    coverLettersFile?: CoverLettersFileResolver<Maybe<File[]>, TypeParent, Context>

    tags?: TagsResolver<Maybe<Tag[]>, TypeParent, Context>

    source?: SourceResolver<string[], TypeParent, Context>

    fields?: FieldsResolver<Maybe<FieldInstance[]>, TypeParent, Context>

    tasks?: TasksResolver<Maybe<Task[]>, TypeParent, Context>

    applications?: ApplicationsResolver<Maybe<Application[]>, TypeParent, Context>

    comments?: CommentsResolver<Maybe<Comment[]>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CreatedAtResolver<R = DateTime, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type FirstNameResolver<R = string, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type LastNameResolver<R = string, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EmailsResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type PhonesResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type LinksResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type AvatarResolver<R = Maybe<File>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type MetaCompanyResolver<R = Maybe<string>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type MetaHeadlineResolver<R = Maybe<string>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type MetaPositionResolver<R = Maybe<string>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ResumesStringResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ResumesFileResolver<R = Maybe<File[]>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    ResumesFileArgs
  >
  export interface ResumesFileArgs {
    where?: Maybe<FileWhereInput>

    orderBy?: Maybe<FileOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type CoverLettersStringResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CoverLettersFileResolver<
    R = Maybe<File[]>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, CoverLettersFileArgs>
  export interface CoverLettersFileArgs {
    where?: Maybe<FileWhereInput>

    orderBy?: Maybe<FileOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TagsResolver<R = Maybe<Tag[]>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TagsArgs
  >
  export interface TagsArgs {
    where?: Maybe<TagWhereInput>

    orderBy?: Maybe<TagOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type SourceResolver<R = string[], Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type FieldsResolver<
    R = Maybe<FieldInstance[]>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, FieldsArgs>
  export interface FieldsArgs {
    where?: Maybe<FieldInstanceWhereInput>

    orderBy?: Maybe<FieldInstanceOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TasksResolver<R = Maybe<Task[]>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TasksArgs
  >
  export interface TasksArgs {
    where?: Maybe<TaskWhereInput>

    orderBy?: Maybe<TaskOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type ApplicationsResolver<
    R = Maybe<Application[]>,
    Parent = Candidate,
    Context = {}
  > = Resolver<R, Parent, Context, ApplicationsArgs>
  export interface ApplicationsArgs {
    where?: Maybe<ApplicationWhereInput>

    orderBy?: Maybe<ApplicationOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type CommentsResolver<R = Maybe<Comment[]>, Parent = Candidate, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CommentsArgs
  >
  export interface CommentsArgs {
    where?: Maybe<CommentWhereInput>

    orderBy?: Maybe<CommentOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }
}

export namespace FileResolvers {
  export interface Resolvers<Context = {}, TypeParent = File> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    size?: SizeResolver<number, TypeParent, Context>

    type?: TypeResolver<string, TypeParent, Context>

    name?: NameResolver<string, TypeParent, Context>

    url?: UrlResolver<string, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = File, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = File, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type SizeResolver<R = number, Parent = File, Context = {}> = Resolver<R, Parent, Context>
  export type TypeResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>
  export type NameResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>
  export type UrlResolver<R = string, Parent = File, Context = {}> = Resolver<R, Parent, Context>
}

export namespace TagResolvers {
  export interface Resolvers<Context = {}, TypeParent = Tag> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    label?: LabelResolver<string, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Tag, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Tag, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Tag, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type LabelResolver<R = string, Parent = Tag, Context = {}> = Resolver<R, Parent, Context>
}

export namespace FieldInstanceResolvers {
  export interface Resolvers<Context = {}, TypeParent = FieldInstance> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    field?: FieldResolver<Field, TypeParent, Context>

    value?: ValueResolver<Maybe<string>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = FieldInstance, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CreatedAtResolver<R = DateTime, Parent = FieldInstance, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = FieldInstance, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type FieldResolver<R = Field, Parent = FieldInstance, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ValueResolver<R = Maybe<string>, Parent = FieldInstance, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace FieldResolvers {
  export interface Resolvers<Context = {}, TypeParent = Field> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    type?: TypeResolver<FieldType, TypeParent, Context>

    label?: LabelResolver<string, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Field, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Field, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Field, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type TypeResolver<R = FieldType, Parent = Field, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type LabelResolver<R = string, Parent = Field, Context = {}> = Resolver<R, Parent, Context>
}

export namespace CommentResolvers {
  export interface Resolvers<Context = {}, TypeParent = Comment> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    createdBy?: CreatedByResolver<User, TypeParent, Context>

    parent?: ParentResolver<Maybe<Comment>, TypeParent, Context>

    content?: ContentResolver<string, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Comment, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Comment, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Comment, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CreatedByResolver<R = User, Parent = Comment, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ParentResolver<R = Maybe<Comment>, Parent = Comment, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ContentResolver<R = string, Parent = Comment, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace StageResolvers {
  export interface Resolvers<Context = {}, TypeParent = Stage> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    name?: NameResolver<string, TypeParent, Context>

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>

    type?: TypeResolver<StageType, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Stage, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Stage, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type NameResolver<R = string, Parent = Stage, Context = {}> = Resolver<R, Parent, Context>
  export type DescriptionResolver<R = Maybe<string>, Parent = Stage, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type TypeResolver<R = StageType, Parent = Stage, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace JobResolvers {
  export interface Resolvers<Context = {}, TypeParent = Job> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    workspace?: WorkspaceResolver<Workspace, TypeParent, Context>

    applications?: ApplicationsResolver<Maybe<Application[]>, TypeParent, Context>

    workflow?: WorkflowResolver<Workflow, TypeParent, Context>

    comments?: CommentsResolver<Maybe<Comment[]>, TypeParent, Context>

    type?: TypeResolver<JobType, TypeParent, Context>

    department?: DepartmentResolver<Maybe<string>, TypeParent, Context>

    locations?: LocationsResolver<Maybe<Location[]>, TypeParent, Context>

    name?: NameResolver<string, TypeParent, Context>

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>

    requirements?: RequirementsResolver<Maybe<string>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Job, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type WorkspaceResolver<R = Workspace, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ApplicationsResolver<R = Maybe<Application[]>, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    ApplicationsArgs
  >
  export interface ApplicationsArgs {
    where?: Maybe<ApplicationWhereInput>

    orderBy?: Maybe<ApplicationOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type WorkflowResolver<R = Workflow, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CommentsResolver<R = Maybe<Comment[]>, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CommentsArgs
  >
  export interface CommentsArgs {
    where?: Maybe<CommentWhereInput>

    orderBy?: Maybe<CommentOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TypeResolver<R = JobType, Parent = Job, Context = {}> = Resolver<R, Parent, Context>
  export type DepartmentResolver<R = Maybe<string>, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type LocationsResolver<R = Maybe<Location[]>, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    LocationsArgs
  >
  export interface LocationsArgs {
    where?: Maybe<LocationWhereInput>

    orderBy?: Maybe<LocationOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type NameResolver<R = string, Parent = Job, Context = {}> = Resolver<R, Parent, Context>
  export type DescriptionResolver<R = Maybe<string>, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type RequirementsResolver<R = Maybe<string>, Parent = Job, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace WorkspaceResolvers {
  export interface Resolvers<Context = {}, TypeParent = Workspace> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    users?: UsersResolver<Maybe<User[]>, TypeParent, Context>

    jobs?: JobsResolver<Maybe<Job[]>, TypeParent, Context>

    candidates?: CandidatesResolver<Maybe<Candidate[]>, TypeParent, Context>

    workflows?: WorkflowsResolver<Maybe<Workflow[]>, TypeParent, Context>

    invites?: InvitesResolver<Maybe<Invite[]>, TypeParent, Context>

    tags?: TagsResolver<Maybe<Tag[]>, TypeParent, Context>

    name?: NameResolver<string, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CreatedAtResolver<R = DateTime, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UsersResolver<R = Maybe<User[]>, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UsersArgs
  >
  export interface UsersArgs {
    where?: Maybe<UserWhereInput>

    orderBy?: Maybe<UserOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type JobsResolver<R = Maybe<Job[]>, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    JobsArgs
  >
  export interface JobsArgs {
    where?: Maybe<JobWhereInput>

    orderBy?: Maybe<JobOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type CandidatesResolver<
    R = Maybe<Candidate[]>,
    Parent = Workspace,
    Context = {}
  > = Resolver<R, Parent, Context, CandidatesArgs>
  export interface CandidatesArgs {
    where?: Maybe<CandidateWhereInput>

    orderBy?: Maybe<CandidateOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type WorkflowsResolver<R = Maybe<Workflow[]>, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    WorkflowsArgs
  >
  export interface WorkflowsArgs {
    where?: Maybe<WorkflowWhereInput>

    orderBy?: Maybe<WorkflowOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type InvitesResolver<R = Maybe<Invite[]>, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    InvitesArgs
  >
  export interface InvitesArgs {
    where?: Maybe<InviteWhereInput>

    orderBy?: Maybe<InviteOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type TagsResolver<R = Maybe<Tag[]>, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    TagsArgs
  >
  export interface TagsArgs {
    where?: Maybe<TagWhereInput>

    orderBy?: Maybe<TagOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type NameResolver<R = string, Parent = Workspace, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace WorkflowResolvers {
  export interface Resolvers<Context = {}, TypeParent = Workflow> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    name?: NameResolver<string, TypeParent, Context>

    description?: DescriptionResolver<Maybe<string>, TypeParent, Context>

    stages?: StagesResolver<Maybe<Stage[]>, TypeParent, Context>

    disqualifications?: DisqualificationsResolver<Maybe<Disqualification[]>, TypeParent, Context>

    fields?: FieldsResolver<Maybe<Field[]>, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Workflow, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Workflow, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Workflow, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type NameResolver<R = string, Parent = Workflow, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type DescriptionResolver<R = Maybe<string>, Parent = Workflow, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type StagesResolver<R = Maybe<Stage[]>, Parent = Workflow, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    StagesArgs
  >
  export interface StagesArgs {
    where?: Maybe<StageWhereInput>

    orderBy?: Maybe<StageOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type DisqualificationsResolver<
    R = Maybe<Disqualification[]>,
    Parent = Workflow,
    Context = {}
  > = Resolver<R, Parent, Context, DisqualificationsArgs>
  export interface DisqualificationsArgs {
    where?: Maybe<DisqualificationWhereInput>

    orderBy?: Maybe<DisqualificationOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }

  export type FieldsResolver<R = Maybe<Field[]>, Parent = Workflow, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    FieldsArgs
  >
  export interface FieldsArgs {
    where?: Maybe<FieldWhereInput>

    orderBy?: Maybe<FieldOrderByInput>

    skip?: Maybe<number>

    after?: Maybe<string>

    before?: Maybe<string>

    first?: Maybe<number>

    last?: Maybe<number>
  }
}

export namespace InviteResolvers {
  export interface Resolvers<Context = {}, TypeParent = Invite> {
    id?: IdResolver<string, TypeParent, Context>

    createdAt?: CreatedAtResolver<DateTime, TypeParent, Context>

    updatedAt?: UpdatedAtResolver<DateTime, TypeParent, Context>

    email?: EmailResolver<string, TypeParent, Context>

    expireAt?: ExpireAtResolver<DateTime, TypeParent, Context>

    invitedBy?: InvitedByResolver<User, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Invite, Context = {}> = Resolver<R, Parent, Context>
  export type CreatedAtResolver<R = DateTime, Parent = Invite, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type UpdatedAtResolver<R = DateTime, Parent = Invite, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EmailResolver<R = string, Parent = Invite, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ExpireAtResolver<R = DateTime, Parent = Invite, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type InvitedByResolver<R = User, Parent = Invite, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace LocationResolvers {
  export interface Resolvers<Context = {}, TypeParent = Location> {
    id?: IdResolver<string, TypeParent, Context>

    country?: CountryResolver<string, TypeParent, Context>

    region?: RegionResolver<string, TypeParent, Context>

    city?: CityResolver<string, TypeParent, Context>

    zip?: ZipResolver<string, TypeParent, Context>
  }

  export type IdResolver<R = string, Parent = Location, Context = {}> = Resolver<R, Parent, Context>
  export type CountryResolver<R = string, Parent = Location, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type RegionResolver<R = string, Parent = Location, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CityResolver<R = string, Parent = Location, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type ZipResolver<R = string, Parent = Location, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace ApplicationConnectionResolvers {
  export interface Resolvers<Context = {}, TypeParent = ApplicationConnection> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>

    edges?: EdgesResolver<(Maybe<ApplicationEdge>)[], TypeParent, Context>

    aggregate?: AggregateResolver<AggregateApplication, TypeParent, Context>
  }

  export type PageInfoResolver<
    R = PageInfo,
    Parent = ApplicationConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type EdgesResolver<
    R = (Maybe<ApplicationEdge>)[],
    Parent = ApplicationConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type AggregateResolver<
    R = AggregateApplication,
    Parent = ApplicationConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
}

export namespace PageInfoResolvers {
  export interface Resolvers<Context = {}, TypeParent = PageInfo> {
    hasNextPage?: HasNextPageResolver<boolean, TypeParent, Context>

    hasPreviousPage?: HasPreviousPageResolver<boolean, TypeParent, Context>

    startCursor?: StartCursorResolver<Maybe<string>, TypeParent, Context>

    endCursor?: EndCursorResolver<Maybe<string>, TypeParent, Context>
  }

  export type HasNextPageResolver<R = boolean, Parent = PageInfo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type HasPreviousPageResolver<R = boolean, Parent = PageInfo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type StartCursorResolver<R = Maybe<string>, Parent = PageInfo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EndCursorResolver<R = Maybe<string>, Parent = PageInfo, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace ApplicationEdgeResolvers {
  export interface Resolvers<Context = {}, TypeParent = ApplicationEdge> {
    node?: NodeResolver<Application, TypeParent, Context>

    cursor?: CursorResolver<string, TypeParent, Context>
  }

  export type NodeResolver<R = Application, Parent = ApplicationEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CursorResolver<R = string, Parent = ApplicationEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace AggregateApplicationResolvers {
  export interface Resolvers<Context = {}, TypeParent = AggregateApplication> {
    count?: CountResolver<number, TypeParent, Context>
  }

  export type CountResolver<R = number, Parent = AggregateApplication, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace CandidateConnectionResolvers {
  export interface Resolvers<Context = {}, TypeParent = CandidateConnection> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>

    edges?: EdgesResolver<(Maybe<CandidateEdge>)[], TypeParent, Context>

    aggregate?: AggregateResolver<AggregateCandidate, TypeParent, Context>
  }

  export type PageInfoResolver<R = PageInfo, Parent = CandidateConnection, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EdgesResolver<
    R = (Maybe<CandidateEdge>)[],
    Parent = CandidateConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type AggregateResolver<
    R = AggregateCandidate,
    Parent = CandidateConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
}

export namespace CandidateEdgeResolvers {
  export interface Resolvers<Context = {}, TypeParent = CandidateEdge> {
    node?: NodeResolver<Candidate, TypeParent, Context>

    cursor?: CursorResolver<string, TypeParent, Context>
  }

  export type NodeResolver<R = Candidate, Parent = CandidateEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type CursorResolver<R = string, Parent = CandidateEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace AggregateCandidateResolvers {
  export interface Resolvers<Context = {}, TypeParent = AggregateCandidate> {
    count?: CountResolver<number, TypeParent, Context>
  }

  export type CountResolver<R = number, Parent = AggregateCandidate, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace JobConnectionResolvers {
  export interface Resolvers<Context = {}, TypeParent = JobConnection> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>

    edges?: EdgesResolver<(Maybe<JobEdge>)[], TypeParent, Context>

    aggregate?: AggregateResolver<AggregateJob, TypeParent, Context>
  }

  export type PageInfoResolver<R = PageInfo, Parent = JobConnection, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EdgesResolver<
    R = (Maybe<JobEdge>)[],
    Parent = JobConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type AggregateResolver<R = AggregateJob, Parent = JobConnection, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace JobEdgeResolvers {
  export interface Resolvers<Context = {}, TypeParent = JobEdge> {
    node?: NodeResolver<Job, TypeParent, Context>

    cursor?: CursorResolver<string, TypeParent, Context>
  }

  export type NodeResolver<R = Job, Parent = JobEdge, Context = {}> = Resolver<R, Parent, Context>
  export type CursorResolver<R = string, Parent = JobEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace AggregateJobResolvers {
  export interface Resolvers<Context = {}, TypeParent = AggregateJob> {
    count?: CountResolver<number, TypeParent, Context>
  }

  export type CountResolver<R = number, Parent = AggregateJob, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace TagConnectionResolvers {
  export interface Resolvers<Context = {}, TypeParent = TagConnection> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>

    edges?: EdgesResolver<(Maybe<TagEdge>)[], TypeParent, Context>

    aggregate?: AggregateResolver<AggregateTag, TypeParent, Context>
  }

  export type PageInfoResolver<R = PageInfo, Parent = TagConnection, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EdgesResolver<
    R = (Maybe<TagEdge>)[],
    Parent = TagConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type AggregateResolver<R = AggregateTag, Parent = TagConnection, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace TagEdgeResolvers {
  export interface Resolvers<Context = {}, TypeParent = TagEdge> {
    node?: NodeResolver<Tag, TypeParent, Context>

    cursor?: CursorResolver<string, TypeParent, Context>
  }

  export type NodeResolver<R = Tag, Parent = TagEdge, Context = {}> = Resolver<R, Parent, Context>
  export type CursorResolver<R = string, Parent = TagEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace AggregateTagResolvers {
  export interface Resolvers<Context = {}, TypeParent = AggregateTag> {
    count?: CountResolver<number, TypeParent, Context>
  }

  export type CountResolver<R = number, Parent = AggregateTag, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace TaskConnectionResolvers {
  export interface Resolvers<Context = {}, TypeParent = TaskConnection> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>

    edges?: EdgesResolver<(Maybe<TaskEdge>)[], TypeParent, Context>

    aggregate?: AggregateResolver<AggregateTask, TypeParent, Context>
  }

  export type PageInfoResolver<R = PageInfo, Parent = TaskConnection, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EdgesResolver<
    R = (Maybe<TaskEdge>)[],
    Parent = TaskConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type AggregateResolver<
    R = AggregateTask,
    Parent = TaskConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
}

export namespace TaskEdgeResolvers {
  export interface Resolvers<Context = {}, TypeParent = TaskEdge> {
    node?: NodeResolver<Task, TypeParent, Context>

    cursor?: CursorResolver<string, TypeParent, Context>
  }

  export type NodeResolver<R = Task, Parent = TaskEdge, Context = {}> = Resolver<R, Parent, Context>
  export type CursorResolver<R = string, Parent = TaskEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace AggregateTaskResolvers {
  export interface Resolvers<Context = {}, TypeParent = AggregateTask> {
    count?: CountResolver<number, TypeParent, Context>
  }

  export type CountResolver<R = number, Parent = AggregateTask, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace UserConnectionResolvers {
  export interface Resolvers<Context = {}, TypeParent = UserConnection> {
    pageInfo?: PageInfoResolver<PageInfo, TypeParent, Context>

    edges?: EdgesResolver<(Maybe<UserEdge>)[], TypeParent, Context>

    aggregate?: AggregateResolver<AggregateUser, TypeParent, Context>
  }

  export type PageInfoResolver<R = PageInfo, Parent = UserConnection, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type EdgesResolver<
    R = (Maybe<UserEdge>)[],
    Parent = UserConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
  export type AggregateResolver<
    R = AggregateUser,
    Parent = UserConnection,
    Context = {}
  > = Resolver<R, Parent, Context>
}

export namespace UserEdgeResolvers {
  export interface Resolvers<Context = {}, TypeParent = UserEdge> {
    node?: NodeResolver<User, TypeParent, Context>

    cursor?: CursorResolver<string, TypeParent, Context>
  }

  export type NodeResolver<R = User, Parent = UserEdge, Context = {}> = Resolver<R, Parent, Context>
  export type CursorResolver<R = string, Parent = UserEdge, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace AggregateUserResolvers {
  export interface Resolvers<Context = {}, TypeParent = AggregateUser> {
    count?: CountResolver<number, TypeParent, Context>
  }

  export type CountResolver<R = number, Parent = AggregateUser, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace MutationResolvers {
  export interface Resolvers<Context = {}, TypeParent = {}> {
    createApplication?: CreateApplicationResolver<Application, TypeParent, Context>

    updateApplication?: UpdateApplicationResolver<Maybe<Application>, TypeParent, Context>

    upsertApplication?: UpsertApplicationResolver<Application, TypeParent, Context>

    deleteApplication?: DeleteApplicationResolver<Maybe<Application>, TypeParent, Context>

    createCandidate?: CreateCandidateResolver<Candidate, TypeParent, Context>

    updateCandidate?: UpdateCandidateResolver<Maybe<Candidate>, TypeParent, Context>

    upsertCandidate?: UpsertCandidateResolver<Candidate, TypeParent, Context>

    deleteCandidate?: DeleteCandidateResolver<Maybe<Candidate>, TypeParent, Context>

    createJob?: CreateJobResolver<Job, TypeParent, Context>

    updateJob?: UpdateJobResolver<Maybe<Job>, TypeParent, Context>

    upsertJob?: UpsertJobResolver<Job, TypeParent, Context>

    deleteJob?: DeleteJobResolver<Maybe<Job>, TypeParent, Context>

    createTag?: CreateTagResolver<Tag, TypeParent, Context>

    updateTag?: UpdateTagResolver<Maybe<Tag>, TypeParent, Context>

    upsertTag?: UpsertTagResolver<Tag, TypeParent, Context>

    deleteTag?: DeleteTagResolver<Maybe<Tag>, TypeParent, Context>

    createTask?: CreateTaskResolver<Task, TypeParent, Context>

    updateTask?: UpdateTaskResolver<Maybe<Task>, TypeParent, Context>

    upsertTask?: UpsertTaskResolver<Task, TypeParent, Context>

    deleteTask?: DeleteTaskResolver<Maybe<Task>, TypeParent, Context>
  }

  export type CreateApplicationResolver<R = Application, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CreateApplicationArgs
  >
  export interface CreateApplicationArgs {
    data: ApplicationCreateInput
  }

  export type UpdateApplicationResolver<
    R = Maybe<Application>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, UpdateApplicationArgs>
  export interface UpdateApplicationArgs {
    data: ApplicationUpdateInput

    where: ApplicationWhereUniqueInput
  }

  export type UpsertApplicationResolver<R = Application, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpsertApplicationArgs
  >
  export interface UpsertApplicationArgs {
    where: ApplicationWhereUniqueInput

    create: ApplicationCreateInput

    update: ApplicationUpdateInput
  }

  export type DeleteApplicationResolver<
    R = Maybe<Application>,
    Parent = {},
    Context = {}
  > = Resolver<R, Parent, Context, DeleteApplicationArgs>
  export interface DeleteApplicationArgs {
    where: ApplicationWhereUniqueInput
  }

  export type CreateCandidateResolver<R = Candidate, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CreateCandidateArgs
  >
  export interface CreateCandidateArgs {
    data: CandidateCreateInput
  }

  export type UpdateCandidateResolver<R = Maybe<Candidate>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpdateCandidateArgs
  >
  export interface UpdateCandidateArgs {
    data: CandidateUpdateInput

    where: CandidateWhereUniqueInput
  }

  export type UpsertCandidateResolver<R = Candidate, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpsertCandidateArgs
  >
  export interface UpsertCandidateArgs {
    where: CandidateWhereUniqueInput

    create: CandidateCreateInput

    update: CandidateUpdateInput
  }

  export type DeleteCandidateResolver<R = Maybe<Candidate>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    DeleteCandidateArgs
  >
  export interface DeleteCandidateArgs {
    where: CandidateWhereUniqueInput
  }

  export type CreateJobResolver<R = Job, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CreateJobArgs
  >
  export interface CreateJobArgs {
    data: JobCreateInput
  }

  export type UpdateJobResolver<R = Maybe<Job>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpdateJobArgs
  >
  export interface UpdateJobArgs {
    data: JobUpdateInput

    where: JobWhereUniqueInput
  }

  export type UpsertJobResolver<R = Job, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpsertJobArgs
  >
  export interface UpsertJobArgs {
    where: JobWhereUniqueInput

    create: JobCreateInput

    update: JobUpdateInput
  }

  export type DeleteJobResolver<R = Maybe<Job>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    DeleteJobArgs
  >
  export interface DeleteJobArgs {
    where: JobWhereUniqueInput
  }

  export type CreateTagResolver<R = Tag, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CreateTagArgs
  >
  export interface CreateTagArgs {
    data: TagCreateInput
  }

  export type UpdateTagResolver<R = Maybe<Tag>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpdateTagArgs
  >
  export interface UpdateTagArgs {
    data: TagUpdateInput

    where: TagWhereUniqueInput
  }

  export type UpsertTagResolver<R = Tag, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpsertTagArgs
  >
  export interface UpsertTagArgs {
    where: TagWhereUniqueInput

    create: TagCreateInput

    update: TagUpdateInput
  }

  export type DeleteTagResolver<R = Maybe<Tag>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    DeleteTagArgs
  >
  export interface DeleteTagArgs {
    where: TagWhereUniqueInput
  }

  export type CreateTaskResolver<R = Task, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    CreateTaskArgs
  >
  export interface CreateTaskArgs {
    data: TaskCreateInput
  }

  export type UpdateTaskResolver<R = Maybe<Task>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpdateTaskArgs
  >
  export interface UpdateTaskArgs {
    data: TaskUpdateInput

    where: TaskWhereUniqueInput
  }

  export type UpsertTaskResolver<R = Task, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    UpsertTaskArgs
  >
  export interface UpsertTaskArgs {
    where: TaskWhereUniqueInput

    create: TaskCreateInput

    update: TaskUpdateInput
  }

  export type DeleteTaskResolver<R = Maybe<Task>, Parent = {}, Context = {}> = Resolver<
    R,
    Parent,
    Context,
    DeleteTaskArgs
  >
  export interface DeleteTaskArgs {
    where: TaskWhereUniqueInput
  }
}

export namespace AccessPayloadResolvers {
  export interface Resolvers<Context = {}, TypeParent = AccessPayload> {
    token?: TokenResolver<string, TypeParent, Context>
  }

  export type TokenResolver<R = string, Parent = AccessPayload, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

export namespace AuthPayloadResolvers {
  export interface Resolvers<Context = {}, TypeParent = AuthPayload> {
    token?: TokenResolver<string, TypeParent, Context>

    refresh?: RefreshResolver<string, TypeParent, Context>
  }

  export type TokenResolver<R = string, Parent = AuthPayload, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
  export type RefreshResolver<R = string, Parent = AuthPayload, Context = {}> = Resolver<
    R,
    Parent,
    Context
  >
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, {}>
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, {}>
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  {}
>
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<DateTime, any> {
  name: 'DateTime'
}

export interface IResolvers<Context = {}> {
  Query?: QueryResolvers.Resolvers<Context>
  Application?: ApplicationResolvers.Resolvers<Context>
  DisqualificationInstance?: DisqualificationInstanceResolvers.Resolvers<Context>
  Disqualification?: DisqualificationResolvers.Resolvers<Context>
  User?: UserResolvers.Resolvers<Context>
  Task?: TaskResolvers.Resolvers<Context>
  Candidate?: CandidateResolvers.Resolvers<Context>
  File?: FileResolvers.Resolvers<Context>
  Tag?: TagResolvers.Resolvers<Context>
  FieldInstance?: FieldInstanceResolvers.Resolvers<Context>
  Field?: FieldResolvers.Resolvers<Context>
  Comment?: CommentResolvers.Resolvers<Context>
  Stage?: StageResolvers.Resolvers<Context>
  Job?: JobResolvers.Resolvers<Context>
  Workspace?: WorkspaceResolvers.Resolvers<Context>
  Workflow?: WorkflowResolvers.Resolvers<Context>
  Invite?: InviteResolvers.Resolvers<Context>
  Location?: LocationResolvers.Resolvers<Context>
  ApplicationConnection?: ApplicationConnectionResolvers.Resolvers<Context>
  PageInfo?: PageInfoResolvers.Resolvers<Context>
  ApplicationEdge?: ApplicationEdgeResolvers.Resolvers<Context>
  AggregateApplication?: AggregateApplicationResolvers.Resolvers<Context>
  CandidateConnection?: CandidateConnectionResolvers.Resolvers<Context>
  CandidateEdge?: CandidateEdgeResolvers.Resolvers<Context>
  AggregateCandidate?: AggregateCandidateResolvers.Resolvers<Context>
  JobConnection?: JobConnectionResolvers.Resolvers<Context>
  JobEdge?: JobEdgeResolvers.Resolvers<Context>
  AggregateJob?: AggregateJobResolvers.Resolvers<Context>
  TagConnection?: TagConnectionResolvers.Resolvers<Context>
  TagEdge?: TagEdgeResolvers.Resolvers<Context>
  AggregateTag?: AggregateTagResolvers.Resolvers<Context>
  TaskConnection?: TaskConnectionResolvers.Resolvers<Context>
  TaskEdge?: TaskEdgeResolvers.Resolvers<Context>
  AggregateTask?: AggregateTaskResolvers.Resolvers<Context>
  UserConnection?: UserConnectionResolvers.Resolvers<Context>
  UserEdge?: UserEdgeResolvers.Resolvers<Context>
  AggregateUser?: AggregateUserResolvers.Resolvers<Context>
  Mutation?: MutationResolvers.Resolvers<Context>
  AccessPayload?: AccessPayloadResolvers.Resolvers<Context>
  AuthPayload?: AuthPayloadResolvers.Resolvers<Context>
  DateTime?: GraphQLScalarType
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>
  include?: IncludeDirectiveResolver<Result>
  deprecated?: DeprecatedDirectiveResolver<Result>
}
