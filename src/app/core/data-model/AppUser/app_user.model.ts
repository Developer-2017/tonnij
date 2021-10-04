import { DocumentStatus } from "../enums/tonnij_enums";
import { AddressMap } from "../AddressMap/address_map.model";
export interface AppUser {
    user?:          User;
    profile?:       Profile;
    setting?:       Setting;
    document?:      Document;
    trucks?:        number;
    trailers?:      number;
    drivers?:       number;
    vendors?:       number;
    customers?:     number;
    defaultFormat?: DefaultFormat;
    tokenData?:     TokenData;
}
export interface DefaultFormat {
    available_date_formats?: string[];
    available_time_formats?: string[];
    dateFormat?:             string;
    timeFormat?:             string;
    phoneFormat?:            string;
    currency?:               string;
    currencyFormat?:         string;
    localStartOfWeek?:       number;
    showCustomNotification?: boolean;
    notificationType?:       string;
    notificationValues?:     string;
    notificationImageUrl?:   string;
    customerCareNumber?:     string;
    baseURL?:                string;
    documentBaseURL?:        string;
    licenseBaseURL?:         string;
    webviewLink?:            null;
    adminNumbers?:           null;
    isRefreshImageCache?:    null;
    years?:                 string[];
    paymentModes?:          string[];
    equipments?:            string[];
    isActiveLiveLoad?:      boolean;
    isActiveLiveTruck?:     boolean;
    provinces?:              string[];
    showPublicAlerts?:      boolean;
    adminMarque?:           string;
    logoBaseURL?:           string; 
    expiryDayAdditionData?:    number;

}

export interface Document {
    license_file?: any;
    is_actual_data?: boolean;
    guid?:                                string;
    app_user_document_id?:                number;
    user_id?:                             number;
    wcb?:                                 string;
    is_document_uploaded?:                boolean;
    wcb_status?:                          DocumentStatus;
    wcb_rejection_reason?:                string;
    coi?:                                 string;
    coi_status?:                          DocumentStatus;
    coi_rejection_reason?:                string;
    safety_instruction?:                  string;
    safety_instruction_status?:           DocumentStatus;
    safety_instruction_rejection_reason?: string;
    insurance?:                           string;
    insurance_status?:                    DocumentStatus;
    insurance_rejection_reason?:          string;
    app_user_document_base_url?:          string;
    is_approved?:                         boolean;
    is_active?:                           boolean;
    created_on?:                          Date;
    created_by?:                          string;
    modified_on?:                         Date;
    modified_by?:                         string;
    user_ip?:                             string;
}

export interface Profile {
    guid?:                 string;
    company_logo?:          string;
    app_user_profile_id?:  number;
    user_id?:              number;
    company_name?:         string;
    contact_person_name?:  string;
    company_address?:      string;
    company_phone?:        string;
    company_cell?:         string;
    company_fax?:          string;
    company_email?:        string;
    company_gst?:          string;
    company_nsc?:          string;
    company_wcb?:          string;
    address_map?:          AddressMap;
    is_document_uploaded?: boolean;
    is_active?:            boolean;
    created_on?:           Date;
    created_by?:           string;
    modified_on?:          Date;
    modified_by?:          string;
    user_ip?:              null;
}

export interface Setting {
    guid?:                    string;
    app_user_setting_id?:     number;
    user_id?:                 number;
    app_notification?:        boolean;
    promo_notification?:      boolean;
    news_update?:             boolean;
    location_access?:         boolean;
    order_prefix?:            string;
    default_date_format?:     string;
    default_time_format?:     string;
    default_currency_format?: string;
    is_active?:               boolean;
    created_on?:              Date;
    created_by?:              string;
    modified_on?:             Date;
    modified_by?:             string;
    user_ip?:                 null;
}

export interface TokenData {
    token?:                string;
    token_created_on?:     Date;
    token_expired_on?:     Date;
    token_validity_hours?: number;
    referer_url?:          string;
}

export interface User {
    guid?:                string;
    user_id?:             number;
    role_id?:             number;
    service_area_id?:     number;
    app_user_profile_id?: number;
    user_first_name_elm?: string;
    user_last_name?:      string;
    user_email_elm?:      string;
    user_phone_elm?:      string;
    alternate_phone_elm?: string;
    last_login_datetime?: Date;
    user_login_elm?:      string;
    user_pass_elm?:       string;
    display_name?:        string;
    user_wallet_amount?:  number;
    profile_pic?:         string;
    device_id?:           string;
    player_id?:           string;
    udid?:                string;
    iOS_player_id?:       string;
    user_agent?:          string;
    is_active?:           boolean;
    created_on?:          Date;
    created_by?:          string;
    modified_on?:         Date;
    modified_by?:         string;
    user_ip?:             string;
}

export interface ResponseMsg {
    isError?:           boolean;
    errorMessage?:      string;
    isWarning?:         boolean;
    warningMessage?:    string;
    isEmptyCollection?: boolean;
}
