import { createClient } from "@/utils/supabase/client";
export default async function getCompleted() {
    const supabase = createClient()

    const {
        data: { user },
      } = await supabase.auth.getUser();

    if(!user){
        return
    }
    let { data: userData, error } = await supabase
        .from('userData')
        .select("*")
        .eq('id', user.id)
        
    if(!userData){
        return
    }
    return userData[0].IntroToFlex
}