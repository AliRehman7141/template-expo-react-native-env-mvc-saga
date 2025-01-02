interface CommonPayload {
    payload: any,
    onSuccess?: (response: any) => void,
    onError?: (error: any) => void,
}
interface CommonResponse { response: any }

interface User {
    id: number;
    uuid?: string;
    full_name: string;
    email: string;
    mobile_key: string;
    mobile_number: string;
    status?: boolean;
    deleted_at?: string | null;
    created_at?: string;
    updated_at?: string;
    picture?: string;
    has_received_gift?: boolean;
    is_special_customer?: boolean;
}

export type {
    User,
    CommonPayload,
    CommonResponse,
}