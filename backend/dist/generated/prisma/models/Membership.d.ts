import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MembershipModel = runtime.Types.Result.DefaultSelection<Prisma.$MembershipPayload>;
export type AggregateMembership = {
    _count: MembershipCountAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
};
export type MembershipMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    companyId: string | null;
    status: $Enums.MembershipStatus | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MembershipMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    companyId: string | null;
    status: $Enums.MembershipStatus | null;
    joinedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type MembershipCountAggregateOutputType = {
    id: number;
    userId: number;
    companyId: number;
    status: number;
    joinedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type MembershipMinAggregateInputType = {
    id?: true;
    userId?: true;
    companyId?: true;
    status?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MembershipMaxAggregateInputType = {
    id?: true;
    userId?: true;
    companyId?: true;
    status?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type MembershipCountAggregateInputType = {
    id?: true;
    userId?: true;
    companyId?: true;
    status?: true;
    joinedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type MembershipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MembershipCountAggregateInputType;
    _min?: MembershipMinAggregateInputType;
    _max?: MembershipMaxAggregateInputType;
};
export type GetMembershipAggregateType<T extends MembershipAggregateArgs> = {
    [P in keyof T & keyof AggregateMembership]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMembership[P]> : Prisma.GetScalarType<T[P], AggregateMembership[P]>;
};
export type MembershipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithAggregationInput | Prisma.MembershipOrderByWithAggregationInput[];
    by: Prisma.MembershipScalarFieldEnum[] | Prisma.MembershipScalarFieldEnum;
    having?: Prisma.MembershipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MembershipCountAggregateInputType | true;
    _min?: MembershipMinAggregateInputType;
    _max?: MembershipMaxAggregateInputType;
};
export type MembershipGroupByOutputType = {
    id: string;
    userId: string;
    companyId: string;
    status: $Enums.MembershipStatus;
    joinedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: MembershipCountAggregateOutputType | null;
    _min: MembershipMinAggregateOutputType | null;
    _max: MembershipMaxAggregateOutputType | null;
};
export type GetMembershipGroupByPayload<T extends MembershipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MembershipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MembershipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MembershipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MembershipGroupByOutputType[P]>;
}>>;
export type MembershipWhereInput = {
    AND?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    OR?: Prisma.MembershipWhereInput[];
    NOT?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    id?: Prisma.UuidFilter<"Membership"> | string;
    userId?: Prisma.UuidFilter<"Membership"> | string;
    companyId?: Prisma.UuidFilter<"Membership"> | string;
    status?: Prisma.EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus;
    joinedAt?: Prisma.DateTimeNullableFilter<"Membership"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    membershipRoles?: Prisma.MembershipRoleListRelationFilter;
};
export type MembershipOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    company?: Prisma.CompanyOrderByWithRelationInput;
    membershipRoles?: Prisma.MembershipRoleOrderByRelationAggregateInput;
};
export type MembershipWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_companyId?: Prisma.MembershipUserIdCompanyIdCompoundUniqueInput;
    AND?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    OR?: Prisma.MembershipWhereInput[];
    NOT?: Prisma.MembershipWhereInput | Prisma.MembershipWhereInput[];
    userId?: Prisma.UuidFilter<"Membership"> | string;
    companyId?: Prisma.UuidFilter<"Membership"> | string;
    status?: Prisma.EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus;
    joinedAt?: Prisma.DateTimeNullableFilter<"Membership"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    company?: Prisma.XOR<Prisma.CompanyScalarRelationFilter, Prisma.CompanyWhereInput>;
    membershipRoles?: Prisma.MembershipRoleListRelationFilter;
}, "id" | "userId_companyId">;
export type MembershipOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.MembershipCountOrderByAggregateInput;
    _max?: Prisma.MembershipMaxOrderByAggregateInput;
    _min?: Prisma.MembershipMinOrderByAggregateInput;
};
export type MembershipScalarWhereWithAggregatesInput = {
    AND?: Prisma.MembershipScalarWhereWithAggregatesInput | Prisma.MembershipScalarWhereWithAggregatesInput[];
    OR?: Prisma.MembershipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MembershipScalarWhereWithAggregatesInput | Prisma.MembershipScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Membership"> | string;
    userId?: Prisma.UuidWithAggregatesFilter<"Membership"> | string;
    companyId?: Prisma.UuidWithAggregatesFilter<"Membership"> | string;
    status?: Prisma.EnumMembershipStatusWithAggregatesFilter<"Membership"> | $Enums.MembershipStatus;
    joinedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Membership"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Membership"> | Date | string;
};
export type MembershipCreateInput = {
    id?: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    company: Prisma.CompanyCreateNestedOneWithoutMembershipsInput;
    membershipRoles?: Prisma.MembershipRoleCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateInput = {
    id?: string;
    userId: string;
    companyId: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    company?: Prisma.CompanyUpdateOneRequiredWithoutMembershipsNestedInput;
    membershipRoles?: Prisma.MembershipRoleUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipCreateManyInput = {
    id?: string;
    userId: string;
    companyId: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipListRelationFilter = {
    every?: Prisma.MembershipWhereInput;
    some?: Prisma.MembershipWhereInput;
    none?: Prisma.MembershipWhereInput;
};
export type MembershipOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MembershipUserIdCompanyIdCompoundUniqueInput = {
    userId: string;
    companyId: string;
};
export type MembershipCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MembershipMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MembershipMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    companyId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    joinedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type MembershipScalarRelationFilter = {
    is?: Prisma.MembershipWhereInput;
    isNot?: Prisma.MembershipWhereInput;
};
export type MembershipCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutUserInput | Prisma.MembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput> | Prisma.MembershipCreateWithoutUserInput[] | Prisma.MembershipUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutUserInput | Prisma.MembershipCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput | Prisma.MembershipUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.MembershipCreateManyUserInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput | Prisma.MembershipUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutUserInput | Prisma.MembershipUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutCompanyInput, Prisma.MembershipUncheckedCreateWithoutCompanyInput> | Prisma.MembershipCreateWithoutCompanyInput[] | Prisma.MembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutCompanyInput | Prisma.MembershipCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.MembershipCreateManyCompanyInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutCompanyInput, Prisma.MembershipUncheckedCreateWithoutCompanyInput> | Prisma.MembershipCreateWithoutCompanyInput[] | Prisma.MembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutCompanyInput | Prisma.MembershipCreateOrConnectWithoutCompanyInput[];
    createMany?: Prisma.MembershipCreateManyCompanyInputEnvelope;
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
};
export type MembershipUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutCompanyInput, Prisma.MembershipUncheckedCreateWithoutCompanyInput> | Prisma.MembershipCreateWithoutCompanyInput[] | Prisma.MembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutCompanyInput | Prisma.MembershipCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutCompanyInput | Prisma.MembershipUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.MembershipCreateManyCompanyInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutCompanyInput | Prisma.MembershipUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutCompanyInput | Prisma.MembershipUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type MembershipUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutCompanyInput, Prisma.MembershipUncheckedCreateWithoutCompanyInput> | Prisma.MembershipCreateWithoutCompanyInput[] | Prisma.MembershipUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutCompanyInput | Prisma.MembershipCreateOrConnectWithoutCompanyInput[];
    upsert?: Prisma.MembershipUpsertWithWhereUniqueWithoutCompanyInput | Prisma.MembershipUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: Prisma.MembershipCreateManyCompanyInputEnvelope;
    set?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    disconnect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    delete?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    connect?: Prisma.MembershipWhereUniqueInput | Prisma.MembershipWhereUniqueInput[];
    update?: Prisma.MembershipUpdateWithWhereUniqueWithoutCompanyInput | Prisma.MembershipUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: Prisma.MembershipUpdateManyWithWhereWithoutCompanyInput | Prisma.MembershipUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
};
export type EnumMembershipStatusFieldUpdateOperationsInput = {
    set?: $Enums.MembershipStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type MembershipCreateNestedOneWithoutMembershipRolesInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutMembershipRolesInput, Prisma.MembershipUncheckedCreateWithoutMembershipRolesInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutMembershipRolesInput;
    connect?: Prisma.MembershipWhereUniqueInput;
};
export type MembershipUpdateOneRequiredWithoutMembershipRolesNestedInput = {
    create?: Prisma.XOR<Prisma.MembershipCreateWithoutMembershipRolesInput, Prisma.MembershipUncheckedCreateWithoutMembershipRolesInput>;
    connectOrCreate?: Prisma.MembershipCreateOrConnectWithoutMembershipRolesInput;
    upsert?: Prisma.MembershipUpsertWithoutMembershipRolesInput;
    connect?: Prisma.MembershipWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MembershipUpdateToOneWithWhereWithoutMembershipRolesInput, Prisma.MembershipUpdateWithoutMembershipRolesInput>, Prisma.MembershipUncheckedUpdateWithoutMembershipRolesInput>;
};
export type MembershipCreateWithoutUserInput = {
    id?: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    company: Prisma.CompanyCreateNestedOneWithoutMembershipsInput;
    membershipRoles?: Prisma.MembershipRoleCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutUserInput = {
    id?: string;
    companyId: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput>;
};
export type MembershipCreateManyUserInputEnvelope = {
    data: Prisma.MembershipCreateManyUserInput | Prisma.MembershipCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type MembershipUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutUserInput, Prisma.MembershipUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutUserInput, Prisma.MembershipUncheckedCreateWithoutUserInput>;
};
export type MembershipUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.MembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutUserInput, Prisma.MembershipUncheckedUpdateWithoutUserInput>;
};
export type MembershipUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.MembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyWithoutUserInput>;
};
export type MembershipScalarWhereInput = {
    AND?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
    OR?: Prisma.MembershipScalarWhereInput[];
    NOT?: Prisma.MembershipScalarWhereInput | Prisma.MembershipScalarWhereInput[];
    id?: Prisma.UuidFilter<"Membership"> | string;
    userId?: Prisma.UuidFilter<"Membership"> | string;
    companyId?: Prisma.UuidFilter<"Membership"> | string;
    status?: Prisma.EnumMembershipStatusFilter<"Membership"> | $Enums.MembershipStatus;
    joinedAt?: Prisma.DateTimeNullableFilter<"Membership"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Membership"> | Date | string;
};
export type MembershipCreateWithoutCompanyInput = {
    id?: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    membershipRoles?: Prisma.MembershipRoleCreateNestedManyWithoutMembershipInput;
};
export type MembershipUncheckedCreateWithoutCompanyInput = {
    id?: string;
    userId: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedCreateNestedManyWithoutMembershipInput;
};
export type MembershipCreateOrConnectWithoutCompanyInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutCompanyInput, Prisma.MembershipUncheckedCreateWithoutCompanyInput>;
};
export type MembershipCreateManyCompanyInputEnvelope = {
    data: Prisma.MembershipCreateManyCompanyInput | Prisma.MembershipCreateManyCompanyInput[];
    skipDuplicates?: boolean;
};
export type MembershipUpsertWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.MembershipWhereUniqueInput;
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutCompanyInput, Prisma.MembershipUncheckedUpdateWithoutCompanyInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutCompanyInput, Prisma.MembershipUncheckedCreateWithoutCompanyInput>;
};
export type MembershipUpdateWithWhereUniqueWithoutCompanyInput = {
    where: Prisma.MembershipWhereUniqueInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutCompanyInput, Prisma.MembershipUncheckedUpdateWithoutCompanyInput>;
};
export type MembershipUpdateManyWithWhereWithoutCompanyInput = {
    where: Prisma.MembershipScalarWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyWithoutCompanyInput>;
};
export type MembershipCreateWithoutMembershipRolesInput = {
    id?: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutMembershipsInput;
    company: Prisma.CompanyCreateNestedOneWithoutMembershipsInput;
};
export type MembershipUncheckedCreateWithoutMembershipRolesInput = {
    id?: string;
    userId: string;
    companyId: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipCreateOrConnectWithoutMembershipRolesInput = {
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutMembershipRolesInput, Prisma.MembershipUncheckedCreateWithoutMembershipRolesInput>;
};
export type MembershipUpsertWithoutMembershipRolesInput = {
    update: Prisma.XOR<Prisma.MembershipUpdateWithoutMembershipRolesInput, Prisma.MembershipUncheckedUpdateWithoutMembershipRolesInput>;
    create: Prisma.XOR<Prisma.MembershipCreateWithoutMembershipRolesInput, Prisma.MembershipUncheckedCreateWithoutMembershipRolesInput>;
    where?: Prisma.MembershipWhereInput;
};
export type MembershipUpdateToOneWithWhereWithoutMembershipRolesInput = {
    where?: Prisma.MembershipWhereInput;
    data: Prisma.XOR<Prisma.MembershipUpdateWithoutMembershipRolesInput, Prisma.MembershipUncheckedUpdateWithoutMembershipRolesInput>;
};
export type MembershipUpdateWithoutMembershipRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    company?: Prisma.CompanyUpdateOneRequiredWithoutMembershipsNestedInput;
};
export type MembershipUncheckedUpdateWithoutMembershipRolesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCreateManyUserInput = {
    id?: string;
    companyId: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    company?: Prisma.CompanyUpdateOneRequiredWithoutMembershipsNestedInput;
    membershipRoles?: Prisma.MembershipRoleUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    companyId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCreateManyCompanyInput = {
    id?: string;
    userId: string;
    status?: $Enums.MembershipStatus;
    joinedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type MembershipUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutMembershipsNestedInput;
    membershipRoles?: Prisma.MembershipRoleUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membershipRoles?: Prisma.MembershipRoleUncheckedUpdateManyWithoutMembershipNestedInput;
};
export type MembershipUncheckedUpdateManyWithoutCompanyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMembershipStatusFieldUpdateOperationsInput | $Enums.MembershipStatus;
    joinedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MembershipCountOutputType = {
    membershipRoles: number;
};
export type MembershipCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    membershipRoles?: boolean | MembershipCountOutputTypeCountMembershipRolesArgs;
};
export type MembershipCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipCountOutputTypeSelect<ExtArgs> | null;
};
export type MembershipCountOutputTypeCountMembershipRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipRoleWhereInput;
};
export type MembershipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    status?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    membershipRoles?: boolean | Prisma.Membership$membershipRolesArgs<ExtArgs>;
    _count?: boolean | Prisma.MembershipCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    status?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    status?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["membership"]>;
export type MembershipSelectScalar = {
    id?: boolean;
    userId?: boolean;
    companyId?: boolean;
    status?: boolean;
    joinedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type MembershipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "companyId" | "status" | "joinedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["membership"]>;
export type MembershipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
    membershipRoles?: boolean | Prisma.Membership$membershipRolesArgs<ExtArgs>;
    _count?: boolean | Prisma.MembershipCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MembershipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type MembershipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    company?: boolean | Prisma.CompanyDefaultArgs<ExtArgs>;
};
export type $MembershipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Membership";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        company: Prisma.$CompanyPayload<ExtArgs>;
        membershipRoles: Prisma.$MembershipRolePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        companyId: string;
        status: $Enums.MembershipStatus;
        joinedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["membership"]>;
    composites: {};
};
export type MembershipGetPayload<S extends boolean | null | undefined | MembershipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MembershipPayload, S>;
export type MembershipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MembershipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MembershipCountAggregateInputType | true;
};
export interface MembershipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Membership'];
        meta: {
            name: 'Membership';
        };
    };
    findUnique<T extends MembershipFindUniqueArgs>(args: Prisma.SelectSubset<T, MembershipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MembershipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MembershipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MembershipFindFirstArgs>(args?: Prisma.SelectSubset<T, MembershipFindFirstArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MembershipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MembershipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MembershipFindManyArgs>(args?: Prisma.SelectSubset<T, MembershipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MembershipCreateArgs>(args: Prisma.SelectSubset<T, MembershipCreateArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MembershipCreateManyArgs>(args?: Prisma.SelectSubset<T, MembershipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MembershipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MembershipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MembershipDeleteArgs>(args: Prisma.SelectSubset<T, MembershipDeleteArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MembershipUpdateArgs>(args: Prisma.SelectSubset<T, MembershipUpdateArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MembershipDeleteManyArgs>(args?: Prisma.SelectSubset<T, MembershipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MembershipUpdateManyArgs>(args: Prisma.SelectSubset<T, MembershipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MembershipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MembershipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MembershipUpsertArgs>(args: Prisma.SelectSubset<T, MembershipUpsertArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MembershipCountArgs>(args?: Prisma.Subset<T, MembershipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MembershipCountAggregateOutputType> : number>;
    aggregate<T extends MembershipAggregateArgs>(args: Prisma.Subset<T, MembershipAggregateArgs>): Prisma.PrismaPromise<GetMembershipAggregateType<T>>;
    groupBy<T extends MembershipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MembershipGroupByArgs['orderBy'];
    } : {
        orderBy?: MembershipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MembershipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMembershipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MembershipFieldRefs;
}
export interface Prisma__MembershipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    company<T extends Prisma.CompanyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CompanyDefaultArgs<ExtArgs>>): Prisma.Prisma__CompanyClient<runtime.Types.Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    membershipRoles<T extends Prisma.Membership$membershipRolesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Membership$membershipRolesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MembershipRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MembershipFieldRefs {
    readonly id: Prisma.FieldRef<"Membership", 'String'>;
    readonly userId: Prisma.FieldRef<"Membership", 'String'>;
    readonly companyId: Prisma.FieldRef<"Membership", 'String'>;
    readonly status: Prisma.FieldRef<"Membership", 'MembershipStatus'>;
    readonly joinedAt: Prisma.FieldRef<"Membership", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"Membership", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Membership", 'DateTime'>;
}
export type MembershipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
export type MembershipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
export type MembershipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
    orderBy?: Prisma.MembershipOrderByWithRelationInput | Prisma.MembershipOrderByWithRelationInput[];
    cursor?: Prisma.MembershipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MembershipScalarFieldEnum | Prisma.MembershipScalarFieldEnum[];
};
export type MembershipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipCreateInput, Prisma.MembershipUncheckedCreateInput>;
};
export type MembershipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MembershipCreateManyInput | Prisma.MembershipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MembershipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    data: Prisma.MembershipCreateManyInput | Prisma.MembershipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MembershipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MembershipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipUpdateInput, Prisma.MembershipUncheckedUpdateInput>;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyInput>;
    where?: Prisma.MembershipWhereInput;
    limit?: number;
};
export type MembershipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MembershipUpdateManyMutationInput, Prisma.MembershipUncheckedUpdateManyInput>;
    where?: Prisma.MembershipWhereInput;
    limit?: number;
    include?: Prisma.MembershipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MembershipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
    create: Prisma.XOR<Prisma.MembershipCreateInput, Prisma.MembershipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MembershipUpdateInput, Prisma.MembershipUncheckedUpdateInput>;
};
export type MembershipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where: Prisma.MembershipWhereUniqueInput;
};
export type MembershipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MembershipWhereInput;
    limit?: number;
};
export type Membership$membershipRolesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MembershipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
};
