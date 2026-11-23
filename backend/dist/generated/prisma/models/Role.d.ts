import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RoleModel = runtime.Types.Result.DefaultSelection<Prisma.$RolePayload>;
export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
export type RoleMinAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    name: string | null;
    description: string | null;
    isSystem: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoleMaxAggregateOutputType = {
    id: string | null;
    companyId: string | null;
    name: string | null;
    description: string | null;
    isSystem: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RoleCountAggregateOutputType = {
    id: number;
    companyId: number;
    name: number;
    description: number;
    isSystem: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RoleMinAggregateInputType = {
    id?: true;
    companyId?: true;
    name?: true;
    description?: true;
    isSystem?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoleMaxAggregateInputType = {
    id?: true;
    companyId?: true;
    name?: true;
    description?: true;
    isSystem?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RoleCountAggregateInputType = {
    id?: true;
    companyId?: true;
    name?: true;
    description?: true;
    isSystem?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RoleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoleCountAggregateInputType;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
    [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRole[P]> : Prisma.GetScalarType<T[P], AggregateRole[P]>;
};
export type RoleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithAggregationInput | Prisma.RoleOrderByWithAggregationInput[];
    by: Prisma.RoleScalarFieldEnum[] | Prisma.RoleScalarFieldEnum;
    having?: Prisma.RoleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoleCountAggregateInputType | true;
    _min?: RoleMinAggregateInputType;
    _max?: RoleMaxAggregateInputType;
};
export type RoleGroupByOutputType = {
    id: string;
    companyId: string;
    name: string;
    description: string | null;
    isSystem: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: RoleCountAggregateOutputType | null;
    _min: RoleMinAggregateOutputType | null;
    _max: RoleMaxAggregateOutputType | null;
};
export type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoleGroupByOutputType[P]>;
}>>;
export type RoleWhereInput = {
    AND?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    OR?: Prisma.RoleWhereInput[];
    NOT?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    id?: Prisma.UuidFilter<"Role"> | string;
    companyId?: Prisma.UuidFilter<"Role"> | string;
    name?: Prisma.StringFilter<"Role"> | string;
    description?: Prisma.StringNullableFilter<"Role"> | string | null;
    isSystem?: Prisma.BoolFilter<"Role"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    membershipRoles?: Prisma.MembershipRoleListRelationFilter;
    rolePermissions?: Prisma.RolePermissionListRelationFilter;
};
export type RoleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    company?: Prisma.CompanyOrderByWithRelationInput;
    membershipRoles?: Prisma.MembershipRoleOrderByRelationAggregateInput;
    rolePermissions?: Prisma.RolePermissionOrderByRelationAggregateInput;
};
export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    companyId_name?: Prisma.RoleCompanyIdNameCompoundUniqueInput;
    AND?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    OR?: Prisma.RoleWhereInput[];
    NOT?: Prisma.RoleWhereInput | Prisma.RoleWhereInput[];
    companyId?: Prisma.UuidFilter<"Role"> | string;
    name?: Prisma.StringFilter<"Role"> | string;
    description?: Prisma.StringNullableFilter<"Role"> | string | null;
    isSystem?: Prisma.BoolFilter<"Role"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    membershipRoles?: Prisma.MembershipRoleListRelationFilter;
    rolePermissions?: Prisma.RolePermissionListRelationFilter;
}, "id" | "companyId_name">;
export type RoleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RoleCountOrderByAggregateInput;
    _max?: Prisma.RoleMaxOrderByAggregateInput;
    _min?: Prisma.RoleMinOrderByAggregateInput;
};
export type RoleScalarWhereWithAggregatesInput = {
    AND?: Prisma.RoleScalarWhereWithAggregatesInput | Prisma.RoleScalarWhereWithAggregatesInput[];
    OR?: Prisma.RoleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RoleScalarWhereWithAggregatesInput | Prisma.RoleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Role"> | string;
    companyId?: Prisma.UuidWithAggregatesFilter<"Role"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Role"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"Role"> | string | null;
    isSystem?: Prisma.BoolWithAggregatesFilter<"Role"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Role"> | Date | string;
};
export type RoleCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutRolesInput;
    membershipRoles?: Prisma.MembershipRoleCreateNestedManyWithoutRoleInput;
    rolePermissions?: Prisma.RolePermissionCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateInput = {
    id?: string;
    companyId: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedCreateNestedManyWithoutRoleInput;
    rolePermissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutRolesNestedInput;
    membershipRoles?: Prisma.MembershipRoleUpdateManyWithoutRoleNestedInput;
    rolePermissions?: Prisma.RolePermissionUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedUpdateManyWithoutRoleNestedInput;
    rolePermissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCreateManyInput = {
    id?: string;
    companyId: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleListRelationFilter = {
    every?: Prisma.RoleWhereInput;
    some?: Prisma.RoleWhereInput;
    none?: Prisma.RoleWhereInput;
};
export type RoleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RoleCompanyIdNameCompoundUniqueInput = {
    companyId: string;
    name: string;
};
export type RoleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    isSystem?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RoleScalarRelationFilter = {
    is?: Prisma.RoleWhereInput;
    isNot?: Prisma.RoleWhereInput;
};
export type RoleCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutCompanyInput, Prisma.RoleUncheckedCreateWithoutCompanyInput> | Prisma.RoleCreateWithoutCompanyInput[] | Prisma.RoleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutCompanyInput | Prisma.RoleCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.RoleCreateManyCompanyInputEnvelope;
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
};
export type RoleUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutCompanyInput, Prisma.RoleUncheckedCreateWithoutCompanyInput> | Prisma.RoleCreateWithoutCompanyInput[] | Prisma.RoleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutCompanyInput | Prisma.RoleCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.RoleCreateManyCompanyInputEnvelope;
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
};
export type RoleUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutCompanyInput, Prisma.RoleUncheckedCreateWithoutCompanyInput> | Prisma.RoleCreateWithoutCompanyInput[] | Prisma.RoleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutCompanyInput | Prisma.RoleCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.RoleUpsertWithWhereUniqueWithoutCompanyInput | Prisma.RoleUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.RoleCreateManyCompanyInputEnvelope;
    set?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    disconnect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    delete?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    update?: Prisma.RoleUpdateWithWhereUniqueWithoutCompanyInput | Prisma.RoleUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.RoleUpdateManyWithWhereWithoutCompanyInput | Prisma.RoleUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
};
export type RoleUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutCompanyInput, Prisma.RoleUncheckedCreateWithoutCompanyInput> | Prisma.RoleCreateWithoutCompanyInput[] | Prisma.RoleUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutCompanyInput | Prisma.RoleCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.RoleUpsertWithWhereUniqueWithoutCompanyInput | Prisma.RoleUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.RoleCreateManyCompanyInputEnvelope;
    set?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    disconnect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    delete?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    connect?: Prisma.RoleWhereUniqueInput | Prisma.RoleWhereUniqueInput[];
    update?: Prisma.RoleUpdateWithWhereUniqueWithoutCompanyInput | Prisma.RoleUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.RoleUpdateManyWithWhereWithoutCompanyInput | Prisma.RoleUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type RoleCreateNestedOneWithoutMembershipRolesInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutMembershipRolesInput, Prisma.RoleUncheckedCreateWithoutMembershipRolesInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutMembershipRolesInput;
    connect?: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateOneRequiredWithoutMembershipRolesNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutMembershipRolesInput, Prisma.RoleUncheckedCreateWithoutMembershipRolesInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutMembershipRolesInput;
    upsert?: Prisma.RoleUpsertWithoutMembershipRolesInput;
    connect?: Prisma.RoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoleUpdateToOneWithWhereWithoutMembershipRolesInput, Prisma.RoleUpdateWithoutMembershipRolesInput>, Prisma.RoleUncheckedUpdateWithoutMembershipRolesInput>;
};
export type RoleCreateNestedOneWithoutRolePermissionsInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutRolePermissionsInput, Prisma.RoleUncheckedCreateWithoutRolePermissionsInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutRolePermissionsInput;
    connect?: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.RoleCreateWithoutRolePermissionsInput, Prisma.RoleUncheckedCreateWithoutRolePermissionsInput>;
    connectOrCreate?: Prisma.RoleCreateOrConnectWithoutRolePermissionsInput;
    upsert?: Prisma.RoleUpsertWithoutRolePermissionsInput;
    connect?: Prisma.RoleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RoleUpdateToOneWithWhereWithoutRolePermissionsInput, Prisma.RoleUpdateWithoutRolePermissionsInput>, Prisma.RoleUncheckedUpdateWithoutRolePermissionsInput>;
};
export type RoleCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipRoles?: Prisma.MembershipRoleCreateNestedManyWithoutRoleInput;
    rolePermissions?: Prisma.RolePermissionCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedCreateNestedManyWithoutRoleInput;
    rolePermissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleCreateOrConnectWithoutCompanyInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutCompanyInput, Prisma.RoleUncheckedCreateWithoutCompanyInput>;
};
export type RoleCreateManyCompanyInputEnvelope = {
    data: Prisma.RoleCreateManyCompanyInput | Prisma.RoleCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type RoleUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.RoleWhereUniqueInput;
    update: Prisma.XOR<Prisma.RoleUpdateWithoutCompanyInput, Prisma.RoleUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutCompanyInput, Prisma.RoleUncheckedCreateWithoutCompanyInput>;
};
export type RoleUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.RoleWhereUniqueInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutCompanyInput, Prisma.RoleUncheckedUpdateWithoutCompanyInput>;
};
export type RoleUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.RoleScalarWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyWithoutCompanyInput>;
};
export type RoleScalarWhereInput = {
    AND?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
    OR?: Prisma.RoleScalarWhereInput[];
    NOT?: Prisma.RoleScalarWhereInput | Prisma.RoleScalarWhereInput[];
    id?: Prisma.UuidFilter<"Role"> | string;
    companyId?: Prisma.UuidFilter<"Role"> | string;
    name?: Prisma.StringFilter<"Role"> | string;
    description?: Prisma.StringNullableFilter<"Role"> | string | null;
    isSystem?: Prisma.BoolFilter<"Role"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Role"> | Date | string;
};
export type RoleCreateWithoutMembershipRolesInput = {
    id?: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutRolesInput;
    rolePermissions?: Prisma.RolePermissionCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutMembershipRolesInput = {
    id?: string;
    companyId: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    rolePermissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleCreateOrConnectWithoutMembershipRolesInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutMembershipRolesInput, Prisma.RoleUncheckedCreateWithoutMembershipRolesInput>;
};
export type RoleUpsertWithoutMembershipRolesInput = {
    update: Prisma.XOR<Prisma.RoleUpdateWithoutMembershipRolesInput, Prisma.RoleUncheckedUpdateWithoutMembershipRolesInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutMembershipRolesInput, Prisma.RoleUncheckedCreateWithoutMembershipRolesInput>;
    where?: Prisma.RoleWhereInput;
};
export type RoleUpdateToOneWithWhereWithoutMembershipRolesInput = {
    where?: Prisma.RoleWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutMembershipRolesInput, Prisma.RoleUncheckedUpdateWithoutMembershipRolesInput>;
};
export type RoleUpdateWithoutMembershipRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutRolesNestedInput;
    rolePermissions?: Prisma.RolePermissionUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutMembershipRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rolePermissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCreateWithoutRolePermissionsInput = {
    id?: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutRolesInput;
    membershipRoles?: Prisma.MembershipRoleCreateNestedManyWithoutRoleInput;
};
export type RoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: string;
    companyId: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedCreateNestedManyWithoutRoleInput;
};
export type RoleCreateOrConnectWithoutRolePermissionsInput = {
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateWithoutRolePermissionsInput, Prisma.RoleUncheckedCreateWithoutRolePermissionsInput>;
};
export type RoleUpsertWithoutRolePermissionsInput = {
    update: Prisma.XOR<Prisma.RoleUpdateWithoutRolePermissionsInput, Prisma.RoleUncheckedUpdateWithoutRolePermissionsInput>;
    create: Prisma.XOR<Prisma.RoleCreateWithoutRolePermissionsInput, Prisma.RoleUncheckedCreateWithoutRolePermissionsInput>;
    where?: Prisma.RoleWhereInput;
};
export type RoleUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: Prisma.RoleWhereInput;
    data: Prisma.XOR<Prisma.RoleUpdateWithoutRolePermissionsInput, Prisma.RoleUncheckedUpdateWithoutRolePermissionsInput>;
};
export type RoleUpdateWithoutRolePermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutRolesNestedInput;
    membershipRoles?: Prisma.MembershipRoleUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleCreateManyCompanyInput = {
    id?: string;
    name: string;
    description?: string | null;
    isSystem?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RoleUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membershipRoles?: Prisma.MembershipRoleUpdateManyWithoutRoleNestedInput;
    rolePermissions?: Prisma.RolePermissionUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedUpdateManyWithoutRoleNestedInput;
    rolePermissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutRoleNestedInput;
};
export type RoleUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isSystem?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RoleCountOutputType = {
    membershipRoles: number;
    rolePermissions: number;
};
export type RoleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    membershipRoles?: boolean | RoleCountOutputTypeCountMembershipRolesArgs;
    rolePermissions?: boolean | RoleCountOutputTypeCountRolePermissionsArgs;
};
export type RoleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleCountOutputTypeSelect<ExtArgs> | null;
};
export type RoleCountOutputTypeCountMembershipRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipRoleWhereInput;
};
export type RoleCountOutputTypeCountRolePermissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolePermissionWhereInput;
};
export type RoleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    name?: boolean;
    description?: boolean;
    isSystem?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    membershipRoles?: boolean | Prisma.Role$membershipRolesArgs<ExtArgs>;
    rolePermissions?: boolean | Prisma.Role$rolePermissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    name?: boolean;
    description?: boolean;
    isSystem?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    companyId?: boolean;
    name?: boolean;
    description?: boolean;
    isSystem?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["role"]>;
export type RoleSelectScalar = {
    id?: boolean;
    companyId?: boolean;
    name?: boolean;
    description?: boolean;
    isSystem?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RoleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "companyId" | "name" | "description" | "isSystem" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>;
export type RoleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    membershipRoles?: boolean | Prisma.Role$membershipRolesArgs<ExtArgs>;
    rolePermissions?: boolean | Prisma.Role$rolePermissionsArgs<ExtArgs>;
    _count?: boolean | Prisma.RoleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RoleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type RoleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $RolePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Role";
    objects: {
        company: Prisma.$CompanyPayload<ExtArgs>;
        membershipRoles: Prisma.$MembershipRolePayload<ExtArgs>[];
        rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        companyId: string;
        name: string;
        description: string | null;
        isSystem: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["role"]>;
    composites: {};
};
export type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RolePayload, S>;
export type RoleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoleCountAggregateInputType | true;
};
export interface RoleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Role'];
        meta: {
            name: 'Role';
        };
    };
    findUnique<T extends RoleFindUniqueArgs>(args: Prisma.SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RoleFindFirstArgs>(args?: Prisma.SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RoleFindManyArgs>(args?: Prisma.SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RoleCreateArgs>(args: Prisma.SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RoleCreateManyArgs>(args?: Prisma.SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RoleDeleteArgs>(args: Prisma.SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RoleUpdateArgs>(args: Prisma.SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RoleDeleteManyArgs>(args?: Prisma.SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RoleUpdateManyArgs>(args: Prisma.SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RoleUpsertArgs>(args: Prisma.SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma.Prisma__RoleClient<runtime.Types.Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RoleCountArgs>(args?: Prisma.Subset<T, RoleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoleCountAggregateOutputType> : number>;
    aggregate<T extends RoleAggregateArgs>(args: Prisma.Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>;
    groupBy<T extends RoleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RoleGroupByArgs['orderBy'];
    } : {
        orderBy?: RoleGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RoleFieldRefs;
}
export interface Prisma__RoleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    membershipRoles<T extends Prisma.Role$membershipRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Role$membershipRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    rolePermissions<T extends Prisma.Role$rolePermissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Role$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RoleFieldRefs {
    readonly id: Prisma.FieldRef<"Role", 'String'>;
    readonly companyId: Prisma.FieldRef<"Role", 'String'>;
    readonly name: Prisma.FieldRef<"Role", 'String'>;
    readonly description: Prisma.FieldRef<"Role", 'String'>;
    readonly isSystem: Prisma.FieldRef<"Role", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Role", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Role", 'DateTime'>;
}
export type RoleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where?: Prisma.RoleWhereInput;
    orderBy?: Prisma.RoleOrderByWithRelationInput | Prisma.RoleOrderByWithRelationInput[];
    cursor?: Prisma.RoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoleScalarFieldEnum | Prisma.RoleScalarFieldEnum[];
};
export type RoleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleCreateInput, Prisma.RoleUncheckedCreateInput>;
};
export type RoleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RoleCreateManyInput | Prisma.RoleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RoleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    data: Prisma.RoleCreateManyInput | Prisma.RoleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RoleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RoleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleUpdateInput, Prisma.RoleUncheckedUpdateInput>;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyInput>;
    where?: Prisma.RoleWhereInput;
    limit?: number;
};
export type RoleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RoleUpdateManyMutationInput, Prisma.RoleUncheckedUpdateManyInput>;
    where?: Prisma.RoleWhereInput;
    limit?: number;
    include?: Prisma.RoleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RoleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
    create: Prisma.XOR<Prisma.RoleCreateInput, Prisma.RoleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RoleUpdateInput, Prisma.RoleUncheckedUpdateInput>;
};
export type RoleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
    where: Prisma.RoleWhereUniqueInput;
};
export type RoleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RoleWhereInput;
    limit?: number;
};
export type Role$membershipRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipRoleSelect<ExtArgs> | null;
    omit?: Prisma.MembershipRoleOmit<ExtArgs> | null;
    include?: Prisma.MembershipRoleInclude<ExtArgs> | null;
    where?: Prisma.MembershipRoleWhereInput;
    orderBy?: Prisma.MembershipRoleOrderByWithRelationInput | Prisma.MembershipRoleOrderByWithRelationInput[];
    cursor?: Prisma.MembershipRoleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipRoleScalarFieldEnum | Prisma.MembershipRoleScalarFieldEnum[];
};
export type Role$rolePermissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where?: Prisma.RolePermissionWhereInput;
    orderBy?: Prisma.RolePermissionOrderByWithRelationInput | Prisma.RolePermissionOrderByWithRelationInput[];
    cursor?: Prisma.RolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolePermissionScalarFieldEnum | Prisma.RolePermissionScalarFieldEnum[];
};
export type RoleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RoleSelect<ExtArgs> | null;
    omit?: Prisma.RoleOmit<ExtArgs> | null;
    include?: Prisma.RoleInclude<ExtArgs> | null;
};
