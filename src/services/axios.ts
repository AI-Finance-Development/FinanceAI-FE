import axios from "axios";
import { useAtom } from "jotai";
import { loadingAtom, messageAtom } from "../store/global-atoms";
import { AuthApi } from "../api/services/auth-api";
import { TargetApi } from "../api/services/target-api";
import { ExpenseApi } from "../api/services/expense-api";
import { AICommentsApi } from "../api/services/ai-comments-api";
import { LotApi } from "../api/services/lot-api";
import { useNavigate } from "react-router-dom";
import { AIAdvicesApi } from "../api/services/ai-advices-api";
import { InvestmentsApi } from "../api/services/investments-api";

export const useAxiosServiceClient = () => {
  const navigate = useNavigate();
  const [,setMessage] = useAtom(messageAtom)
  const [, setLoading] = useAtom(loadingAtom);

  const axiosClient = axios.create({
    withCredentials:true
  })

  axiosClient.interceptors.request.use((config) => {
    setLoading(true);
    console.log("req: ", config);
    return config;
  });

  axiosClient.interceptors.response.use(
    (response) => {
      if (!response.data.success) {
        setLoading(false);
        return Promise.reject(response);
      }
      setLoading(false);
      return response;
    },
    (error) => {
      console.log("error on response: ", error);
      console.log("response: ", error.response.status);
      if(error.response.status === 403){
        setMessage({
          type:"warning",
          message:"Bu işlem için yetkiniz bulunmamaktadır. Lütfen Giriş Yapın"
        })
        navigate('/auth')
      }
      setLoading(false);
      return Promise.reject(error);
    }
  );

  const services = {
    AuthApi: new AuthApi(axiosClient),
    TargetApi: new TargetApi(axiosClient),
    ExpenseApi: new ExpenseApi(axiosClient),
    AICommentsApi: new AICommentsApi(axiosClient),
    LotApi: new LotApi(axiosClient),
    AIAdvicesApi: new AIAdvicesApi(axiosClient),
    InvestmentsApi: new InvestmentsApi(axiosClient)
  }

  return {
    ...services
  }
};
