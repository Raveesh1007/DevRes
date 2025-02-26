import {createServerClient, type CookieOptions} from "@supabase/ssr";
import { NextRequest, NextResponse} from "next/server";

export const createClient = (request: NextRequest) => {
    let response = NextResponse.next({
        request : {
            headers: request.headers,
        },
    });

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_SERVICE_KEY!,
        {
            cookies: {
                get(name: string){
                    return request.cookies.get(name)?.value;
                },
                set(name: string, value: string, options: CookieOptions){
                    request.cookies.set({
                        name, 
                        value,
                        ...options
                });
                response = NextResponse.next({
                    request: {
                        headers: request.headers,
                    },
                });
                response.cookies.set({
                    name,
                    value,
                    ...options
                });
                response = NextResponse.next({
                    request: {
                        headers: request.headers,
                    },
                })
                response.cookies.set({
                    name,
                    value,
                    ...options,
                });
                },
            },
        },
    );
    return {supabase, response};

};


export const updateSession = async (request: NextRequest, session: any) => {
    try{
        const {supabase, response} = createClient(request);
        await supabase.auth.getUser();
    return response;
    } catch (error){
        return NextResponse.next({
            request: {
                headers: request.headers,
            },
        });
    }
};