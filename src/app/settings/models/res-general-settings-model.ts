import { GlobalCurrencyModel } from './global-currency-model';
import { GlobalTimeZoneModel } from './global-time-zone-model';
import { GlobalLanguageCodeModel } from './global-language-code-model';
import { GlobalDateFormateModel } from './global-date-formate-model';
import { GlobaldaysOfWeekModel } from './globaldays-of-week-model';
import { GlobalCountryModel } from './global-country-model';
import { BillAddressInstitution } from 'src/app/bill/models/bill-address-institution';
import { GeneralSettingsModel } from './general-settings-model';
import { InstituteTypeGlobalModel } from './institute-type-global-model';
export class ResGeneralSettingsModel {
    info: GeneralSettingsModel;
    address: BillAddressInstitution[];
    country: GlobalCountryModel[];
    instituteTypeGlobal: InstituteTypeGlobalModel[];
    dayOfWeek: GlobaldaysOfWeekModel[];
    dateFormat: GlobalDateFormateModel[];
    languageCode: GlobalLanguageCodeModel[];
    timeZone: GlobalTimeZoneModel[];
    currency: GlobalCurrencyModel[];
}
