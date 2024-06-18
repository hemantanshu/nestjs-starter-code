import { BankAccountEntity } from '../accounts/entities/bank.account.entity';
import { BankApproverEntity } from '../accounts/entities/bank.approver.entity';
import { BankCallEntity } from '../accounts/entities/bank.call.entity';
import { BankStatementEntity } from '../accounts/entities/bank.statement.entity';
import { BankTransferEntity } from '../accounts/entities/bank.transfer.entity';
import { BillingBankEntity } from '../accounts/entities/billing.bank.entity';
import { BillingDocumentEntity } from '../accounts/entities/billing.document.entity';
import { BillingEntity } from '../accounts/entities/billing.entity';
import { BusinessPaymentEntity } from '../accounts/entities/business.payment.entity';
import { ChequePaymentEntity } from '../accounts/entities/cheque.payment.entity';
import { ConnectedBankEntity } from '../accounts/entities/connected.bank.entity';
import { DemandDraftPaymentEntity } from '../accounts/entities/demand.draft.payment.entity';
import { FinancialYearEntity } from '../accounts/entities/financial.year.entity';
import { GstCredentialEntity } from '../accounts/entities/gst.credential.entity';
import { GstLedgerEntity } from '../accounts/entities/gst.ledger.entity';
import { Gstr2bIssueEntity } from '../accounts/entities/gstr2b.issue.entity';
import { Gstr2bItemEntity } from '../accounts/entities/gstr2b.item.entity';
import { Gstr2bSummaryEntity } from '../accounts/entities/gstr2b.summary.entity';
import { LedgerTransactionEntity } from '../accounts/entities/ledger.transaction.entity';
import { NeftBankHolidayEntity } from '../accounts/entities/neft.bank.holiday.entity';
import { OfflineBankFormatEntity } from '../accounts/entities/offline.bank.format.entity';
import { OfflineBankPayoutEntity } from '../accounts/entities/offline.bank.payout.entity';
import { OfflineBankReconEntity } from '../accounts/entities/offline.bank.recon.entity';
import { OfflineBankTransferEntity } from '../accounts/entities/offline.bank.transfer.entity';
import { PaymentIdentifierEntity } from '../accounts/entities/payment.identifier.entity';
import { TdsCategoryEntity } from '../accounts/entities/tds.category.entity';
import { TdsFilingEntity } from '../accounts/entities/tds.filing.entity';
import { TdsFilingItemEntity } from '../accounts/entities/tds.filing.item.entity';
import { TdsFilingReceiptEntity } from '../accounts/entities/tds.filing.receipt.entity';
import { TdsFilingSummaryEntity } from '../accounts/entities/tds.filing.summary.entity';
import { TdsLedgerEntity } from '../accounts/entities/tds.ledger.entity';
import { AllowedDomainEntity } from '../business/entities/allowed.domain.entity';
import { AllowedPanEntity } from '../business/entities/allowed.pan.entity';
import { BusinessAccountEntity } from '../business/entities/business.account.entity';
import { BusinessClientEntity } from '../business/entities/business.client.entity';
import { BusinessCurrencyEntity } from '../business/entities/business.currency.entity';
import { BusinessEntity } from '../business/entities/business.entity';
import { BusinessIntegrationCredentialsEntity } from '../business/entities/business.integration.credentials.entity';
import { BusinessIntegrationMessagesEntity } from '../business/entities/business.integration.messages.entity';
import { BusinessIntegrationsEntity } from '../business/entities/business.integrations.entity';
import { BusinessPropertyEntity } from '../business/entities/business.property.entity';
import { BusinessRoleEntity } from '../business/entities/business.role.entity';
import { BusinessVendorEntity } from '../business/entities/business.vendor.entity';
import { BusinessViolationEntity } from '../business/entities/business.violation.entity';
import { BusinessWhatsappMessagesEntity } from '../business/entities/business.whatsapp.messages.entity';
import { CreditCardTypeEntity } from '../business/entities/credit.card.type.entity';
import { CurrencyRateEntity } from '../business/entities/currency.rate.entity';
import { DataViolationEntity } from '../business/entities/data.violation.entity';
import { EmailMessageEntity } from '../business/entities/email.message.entity';
import { EmailNotificationEntity } from '../business/entities/email.notification.entity';
import { EmailPreferenceEntity } from '../business/entities/email.preference.entity';
import { FormScriptEntity } from '../business/entities/form.script.entity';
import { InvitationDocumentEntity } from '../business/entities/invitation.document.entity';
import { LocationEntity } from '../business/entities/location.entity';
import { NotificationPreferenceEntity } from '../business/entities/notification.preference.entity';
import { OnholdDocumentEntity } from '../business/entities/onhold.document.entity';
import { OwnershipTransferInvitationEntity } from '../business/entities/ownership.transfer.invitation.entity';
import { ParsedStatementEntity } from '../business/entities/parsed.statement.entity';
import { ParsedStatementItemEntity } from '../business/entities/parsed.statement.item.entity';
import { PaymentModeEntity } from '../business/entities/payment.mode.entity';
import { SerialNumberEntity } from '../business/entities/serial.number.entity';
import { SignedUrlEntity } from '../business/entities/signed.url.entity';
import { TncEntity } from '../business/entities/tnc.entity';
import { VendorDocumentIssueEntity } from '../business/entities/vendor.document.issue.entity';
import { VendorDocumentPreferenceEntity } from '../business/entities/vendor.document.preference.entity';
import { VendorInvitationEntity } from '../business/entities/vendor.invitation.entity';
import { WhatsappPreferenceEntity } from '../business/entities/whatsapp.preference.entity';
import { AdvanceCategoryEntity } from '../employee/entities/advance.category.entity';
import { DepartmentEntity } from '../employee/entities/department.entity';
import { DesignationEntity } from '../employee/entities/designation.entity';
import { EmployeeBankEntity } from '../employee/entities/employee.bank.entity';
import { EmployeeEntity } from '../employee/entities/employee.entity';
import { EmployeeGradeEntity } from '../employee/entities/employee.grade.entity';
import { AdvanceEntity } from '../expense/entities/advance.entity';
import { AdvanceSourceEntity } from '../expense/entities/advance.source.entity';
import { AdvanceUserEntity } from '../expense/entities/advance.user.entity';
import { CreditNoteEntity } from '../expense/entities/credit.note.entity';
import { ExpenseCessEntity } from '../expense/entities/expense.cess.entity';
import { ExpenseEntity } from '../expense/entities/expense.entity';
import { ExpenseGstEntity } from '../expense/entities/expense.gst.entity';
import { ExpenseHeadAllocationEntity } from '../expense/entities/expense.head.allocation.entity';
import { ExpenseHeadEntity } from '../expense/entities/expense.head.entity';
import { ExpensePayeeAllocationEntity } from '../expense/entities/expense.payee.allocation.entity';
import { ExpensePocEntity } from '../expense/entities/expense.poc.entity';
import { ExpenseSourceEntity } from '../expense/entities/expense.source.entity';
import { ExpenseTcsEntity } from '../expense/entities/expense.tcs.entity';
import { ExpenseTdsEntity } from '../expense/entities/expense.tds.entity';
import { ExpenseTdsSourceEntity } from '../expense/entities/expense.tds.source.entity';
import { ExpenseUserEntity } from '../expense/entities/expense.user.entity';
import { GrnEntity } from '../purchase/entities/grn.entity';
import { GrnItemEntity } from '../purchase/entities/grn.item.entity';
import { ItemAssignmentEntity } from '../purchase/entities/item.assignment.entity';
import { ItemCategoryEntity } from '../purchase/entities/item.category.entity';
import { ItemEntity } from '../purchase/entities/item.entity';
import { PurchaseOrderEntity } from '../purchase/entities/purchase.order.entity';
import { PurchaseQuoteEntity } from '../purchase/entities/purchase.quote.entity';
import { PurchaseRequestCategoryEntity } from '../purchase/entities/purchase.request.category.entity';
import { PurchaseRequestEntity } from '../purchase/entities/purchase.request.entity';
import { JournalEntryEntity } from '../tally/entities/journal.entry.entity';
import { TallyCreditorEntity } from '../tally/entities/tally.creditor.entity';
import { TallyExpenseHeadEntity } from '../tally/entities/tally.expense.head.entity';
import { TallyGroupEntity } from '../tally/entities/tally.group.entity';
import { TallySubledgerTypeEntity } from '../tally/entities/tally.subledger.type.entity';
import { ActivityLogEntity } from '../utility/entities/activity.log.entity';
import { AddressEntity } from '../utility/entities/address.entity';
import { ContactPersonEntity } from '../utility/entities/contact.person.entity';
import { CurrencyEntity } from '../utility/entities/currency.entity';
import { DataAccessEntity } from '../utility/entities/data.access.entity';
import { DocumentTypeEntity } from '../utility/entities/document.type.entity';
import { DocumentUploadEntity } from '../utility/entities/document.upload.entity';
import { ExtractTableEntity } from '../utility/entities/extract.table.entity';
import { FinnotoUserEntity } from '../utility/entities/finnoto.user.entity';
import { IntegrationsEntity } from '../utility/entities/integrations.entity';
import { NoteEntity } from '../utility/entities/note.entity';
import { PdfDocumentsEntity } from '../utility/entities/pdf.documents.entity';
import { PdfTemplatesEntity } from '../utility/entities/pdf.templates.entity';
import { RecurringDocumentEntity } from '../utility/entities/recurring.document.entity';
import { RecurringScheduleEntity } from '../utility/entities/recurring.schedule.entity';
import { VerifiedContactEntity } from '../utility/entities/verified.contact.entity';
import { ViolationDefinitionEntity } from '../utility/entities/violation.definition.entity';
import { WatchlistAssignmentEntity } from '../utility/entities/watchlist.assignment.entity';
import { BillingPocEntity } from '../vendor/entities/billing.poc.entity';
import { VendorAccountEntity } from '../vendor/entities/vendor.account.entity';
import { VendorBusinessEntity } from '../vendor/entities/vendor.business.entity';
import { VendorClientEntity } from '../vendor/entities/vendor.client.entity';
import { VendorEntity } from '../vendor/entities/vendor.entity';
import { VendorRoleEntity } from '../vendor/entities/vendor.role.entity';
import { VendorUserEntity } from '../vendor/entities/vendor.user.entity';
import { ApprovalRuleEntity } from '../workflow/entities/approval.rule.entity';
import { ApprovalStepEntity } from '../workflow/entities/approval.step.entity';
import { AuthorityDelegationEntity } from '../workflow/entities/authority.delegation.entity';
import { LimitConfigEntity } from '../workflow/entities/limit.config.entity';
import { WorkflowAdvanceLimitEntity } from '../workflow/entities/workflow.advance.limit.entity';
import { WorkflowExpenseLimitEntity } from '../workflow/entities/workflow.expense.limit.entity';
import { WorkflowStatusEntity } from '../workflow/entities/workflow.status.entity';
import { WorkflowStepEntity } from '../workflow/entities/workflow.step.entity';
import { WorkflowUserEntity } from '../workflow/entities/workflow.user.entity';

const entityConstants = {
    '251535b8cc6f309d6ca8ef895f84ded4': BankAccountEntity,
    '08f6b2454fef6057cc7d71c531ebfdfe': BankApproverEntity,
    '8f8469cc79a4ca8d22323dd222331a6d': BankCallEntity,
    '0751e2e0e9c7f7053852cd42b7531f72': BankStatementEntity,
    '387e84eaaf29895cecfd6cdff114634b': BankTransferEntity,
    d72c21db4cce0217e5672d23779956ee: BillingBankEntity,
    '74df8c0c797bb8698a65738e936d46e0': BillingDocumentEntity,
    cddd4d780c3ba0b0c070c06125dc8cd7: BillingEntity,
    '5594c70e0455eaedb9c9da1c1416f575': BusinessPaymentEntity,
    d443c565db9de1cc242d556842b6f851: ChequePaymentEntity,
    '790bdfbb42b1f16ccbb22c1b67a68b18': ConnectedBankEntity,
    f77ad540101eb2fa55e9ab224e64abae: DemandDraftPaymentEntity,
    '4d9f58914d222f7d5fadb8079ab9d012': FinancialYearEntity,
    f8b55cc8f0c7a1feeb12f4d558c5a656: GstCredentialEntity,
    '9d87e73f91a92fe99fd46c047f83bee6': GstLedgerEntity,
    '1ceee77d33b6772d2e0d24fe2bc231fb': Gstr2bIssueEntity,
    '6e082320b13eaee964309b53eb80160b': Gstr2bItemEntity,
    e5404133f5a0b54f63e29c75ad0831ab: Gstr2bSummaryEntity,
    bb33715d12c6ba7ddc74c519fe84dfb7: LedgerTransactionEntity,
    '4104b3aa389afdd8801af6ceab03fa44': NeftBankHolidayEntity,
    '380f6c122b87adcbbcf079ab275721a9': OfflineBankFormatEntity,
    '7e322be61f35fe36fb7538ab93ba580a': OfflineBankPayoutEntity,
    '53ee8b42a15192b2c899dd540c8011e6': OfflineBankReconEntity,
    '77a5a89e94864c128cb27942fb3578b8': OfflineBankTransferEntity,
    da7c620f58c771d4f4fbb0b787bdf04c: PaymentIdentifierEntity,
    '49481e5950ab4d73832476f396f43a7b': TdsCategoryEntity,
    a5b57b2dfd7d7476e5255605e84a9516: TdsFilingEntity,
    f5f76d08d0c3be65f1fc9440d55124f8: TdsFilingItemEntity,
    fc2ec1b26dd298e02e0f11bc16f67616: TdsFilingReceiptEntity,
    '8aa7eca4d732903a6f1a317884a968ae': TdsFilingSummaryEntity,
    '79b510afa4664b65bf6b667c2bf8d4c8': TdsLedgerEntity,
    '2400a2468cbbd7095bb51eb336cc6a53': AllowedDomainEntity,
    da1cb0ea0fb48a7c06d52319c538b03b: AllowedPanEntity,
    e8c231ff5a4e23349e79eb09ba447c25: BusinessAccountEntity,
    '7316a710ff81aac1bad5a6bdf83dc61c': BusinessClientEntity,
    '88b2fee2fb43984e3e74b629524607d8': BusinessCurrencyEntity,
    d6d2e31a0f603594295feb7db9d3d8d9: BusinessEntity,
    '286ef435141e7149a954ba3fdb055b91': BusinessIntegrationCredentialsEntity,
    '1ee6279ebdaa713d02f0d7c02b7715c2': BusinessIntegrationMessagesEntity,
    '710f28e860f390fdb1c56771420883ee': BusinessIntegrationsEntity,
    '40fb40e03f64f7d4587e437588583f33': BusinessPropertyEntity,
    '0bb5bd3315f471a2a8311ec7e07ffb65': BusinessRoleEntity,
    '6a104ccdaa89cef882365b58eaf2a9d7': BusinessVendorEntity,
    b6255e31611372ea53998f6e6d0c6fe9: BusinessViolationEntity,
    cea6f2946c3730f945f881a6e2b7655d: BusinessWhatsappMessagesEntity,
    acc03ff04124a274b580c3da308f44ed: CreditCardTypeEntity,
    '7e8d7c28ccec7ddf04ce99bf8a065804': CurrencyRateEntity,
    dd9250393b012949a346ebe2eacc09da: DataViolationEntity,
    '87d330e6c629608a9baeecf85d7195c2': EmailMessageEntity,
    '3dc69d5125aaa74a9c9a54a000260050': EmailNotificationEntity,
    a2d7ee4cdeee99aa4593e8b7f9e9d955: EmailPreferenceEntity,
    '5707b0546fc09539e05cd0682d338572': FormScriptEntity,
    '88e026633ba242f81d97d9606d6f910b': InvitationDocumentEntity,
    '083b6a3627aebdc0a144ebc7541eeee5': LocationEntity,
    '05ad547368fca06d774aa781dfe45082': NotificationPreferenceEntity,
    '91c5f94523d9707947aa2cd6ef87c41c': OnholdDocumentEntity,
    '4375f0c66f41ebbe7586098e16d92145': OwnershipTransferInvitationEntity,
    a2400cbc35ab8a344cf6f0e336832e16: ParsedStatementEntity,
    d6e1f4cf4fad3343f7f562722ad3815a: ParsedStatementItemEntity,
    '0573148a5bbf0de9ea1d93b5253f7fb1': PaymentModeEntity,
    '263956c42351ddcc8b3807d4b4aed324': SerialNumberEntity,
    b81348ebbe00e1e289da848dd26afeb0: SignedUrlEntity,
    '8014b9163f4364ccf07b36a6ccbb857e': TncEntity,
    '7d6a018f8459b2521373cf56e644189f': VendorDocumentIssueEntity,
    '3430ee0c99f59a56223798faff35e8d8': VendorDocumentPreferenceEntity,
    b9d6d4ca3ba8312938fdbb87c078a5ee: VendorInvitationEntity,
    e73a867b8ef616fe16b8256f0285845e: WhatsappPreferenceEntity,
    '3d522de35eef34011522a54bf3beea48': AdvanceCategoryEntity,
    d2656c612d54c18ef2bf0ad00f865674: DepartmentEntity,
    c74571fff23abb75ff2d80a5bae48f72: DesignationEntity,
    cfb80c2e955c2160768b4fae56726f3e: EmployeeBankEntity,
    '87dc4f00a76c9e9890277907e51305f0': EmployeeEntity,
    '51bb4dbef5b6599f1f46386f96968557': EmployeeGradeEntity,
    '20ab1b506e9a704b231ad193b3488df5': AdvanceEntity,
    cdbefa9135c4feae4fd2d1c5fe6ccf72: AdvanceSourceEntity,
    '57e29a44976c025191478daae249af2c': AdvanceUserEntity,
    '56994bc1d362bb565371d415ebdfa80e': CreditNoteEntity,
    eba23627f273794d2e58749f2ceab8b4: ExpenseCessEntity,
    '9ff68c2947fabaef5b67608904595189': ExpenseEntity,
    '7604eca3c5027a432f0e5dbdb69763e0': ExpenseGstEntity,
    fdc54ff5fa86e5c02349cd3962e7332a: ExpenseHeadAllocationEntity,
    f271ed7164180eaab644025ce79e2482: ExpenseHeadEntity,
    '8c4de74079d74c5b259eb86bc29d0335': ExpensePayeeAllocationEntity,
    cdace2a1e4862365f3996ef8506b1817: ExpensePocEntity,
    cf09b6443e44560d76e51bdf964296e0: ExpenseSourceEntity,
    d8b0a80f910f2e0d0f864c99fafb73e1: ExpenseTcsEntity,
    '1997bc8965aad8d04d1c6cf63315b091': ExpenseTdsEntity,
    '47ea6c443abc7cb86de9b25f98519dfa': ExpenseTdsSourceEntity,
    e5d3ef6a579653c9cf098aaafdbe7bbb: ExpenseUserEntity,
    '3c0412336113a0cc7d285399277b3585': GrnEntity,
    c95ac38f6fb32e1a229de56e20b99c81: GrnItemEntity,
    c700c4d1d082dfe0504dba4166927266: ItemAssignmentEntity,
    f8f03a976186199d4e7c9f5e00b7dcf5: ItemCategoryEntity,
    '10d7d43b8d2e8b71f2b07674bb694a39': ItemEntity,
    '78a33943f1946946336bce4920d9b1ef': PurchaseOrderEntity,
    b9cd469e2e702f7dd025a30507cdf0de: PurchaseQuoteEntity,
    '4910ebba3f32a07e4ea751782f791ca3': PurchaseRequestCategoryEntity,
    '02b8c76a72d627a41651d0f85c08779c': PurchaseRequestEntity,
    ac3596ebbb565857a87fe3ea0f1a09e1: JournalEntryEntity,
    '21d9be96ed698179c3f6a4dedb46fff3': TallyCreditorEntity,
    '02749a7509f058007f1bd33c3df1a6b5': TallyExpenseHeadEntity,
    '11a2ef3df7ebdb36e08603e874e3962e': TallyGroupEntity,
    '1583a19b86aaadde2ece8edecc213fb8': TallySubledgerTypeEntity,
    '39fefddc4478e4584a8bce4f1ecd23d9': ActivityLogEntity,
    '80a6eccdc0f38d4de0cb8c38044cae15': AddressEntity,
    db6702093c0f8594793ed1d71ed5aeb4: ContactPersonEntity,
    '83384de6152101b3d7e995740397eca9': CurrencyEntity,
    '760ea58bbdc8be9d5fce1d5a148e8523': DataAccessEntity,
    '50c4ccca79d7a091c8d327f0484566e5': DocumentTypeEntity,
    '8d530237d022797d70a983f3928bbe2a': DocumentUploadEntity,
    b652bdc4440cdfb4e2a76c0f1f25057d: ExtractTableEntity,
    '233ac7200a9ead1803a44c28e3857f33': FinnotoUserEntity,
    '44b97308b4d9538190ffa9f629a4a2e2': IntegrationsEntity,
    '513ccdde9b1c557267a17319608e711b': NoteEntity,
    '58212d33f6268cfeca20cbafda3cd4ba': PdfDocumentsEntity,
    dde415321a2afb3b70b76c7949a8777c: PdfTemplatesEntity,
    aa3bc84712cf988d7f494fa02858115b: RecurringDocumentEntity,
    d2b13506b02f73ec5849bca4b6133e8e: RecurringScheduleEntity,
    '9913a5cf8eed0fb4b926fe3678f5ae82': VerifiedContactEntity,
    '7c1019003e6e75c04588b7ec1936d770': ViolationDefinitionEntity,
    '9c47e38e41415ac04d219f522982a5ed': WatchlistAssignmentEntity,
    '1e946445e6aea67ef5931088da553a8c': BillingPocEntity,
    ace89f30dd7932e8cb28f09298357f5e: VendorAccountEntity,
    ec2fbbb843de9e28355c8b1ba15d39c4: VendorBusinessEntity,
    '32b7de0e8a7968e429a717aefb091984': VendorClientEntity,
    '07e0457f473af2e6c6ca5ec1c978b066': VendorEntity,
    '9a12a6883340708e8a70c230a0f73a33': VendorRoleEntity,
    afebc1ea1f99f67ed33f9c8c79e74b2f: VendorUserEntity,
    '10a47f4ef203b0b47d2cd8bb9cd62012': ApprovalRuleEntity,
    dc8b127e44b1e6b2dc780d376bf739a7: ApprovalStepEntity,
    '842dc9bfac49f3a4ea033c355e6f6eee': AuthorityDelegationEntity,
    '5a4e814f6491d6548ad67717cbde55e9': LimitConfigEntity,
    '3c3c6882b8d403a42762322017442377': WorkflowAdvanceLimitEntity,
    '703a2e7147d8fd6c186b5600eaa2d785': WorkflowExpenseLimitEntity,
    af2ee497a774be1111ae5656a69017f9: WorkflowStatusEntity,
    '3f93f36b852931d615d2168dd473f474': WorkflowStepEntity,
    ffd28309c8dcc49f85017f8d3747e200: WorkflowUserEntity,
};

export = entityConstants;
