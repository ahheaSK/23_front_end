import type { CaptchaResponse } from "../model/captcha.model";
import apiClient from "./apiClient";

export function getCaptcha(){
  return apiClient.get<CaptchaResponse>('/auth/captcha');
}