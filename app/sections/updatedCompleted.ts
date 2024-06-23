
import { createClient } from "@/utils/supabase/client";



export default async function updateCompleted(num: any) {
    const supabase = createClient()

    const {
        data: { user },
      } = await supabase.auth.getUser();

    if(!user){
        return
    }
    const { data, error } = await supabase
    .from('userData')
    .update({ IntroToFlex: num })
    .eq('id', user.id)
    .select("*")
    return
}