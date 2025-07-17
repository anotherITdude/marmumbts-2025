"use client";
import React, { ChangeEvent, useRef } from "react";

import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import register_bg from "../public/register_bg.png";
import { schema } from "@/schemas/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { motion } from "framer-motion";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Input from "./Input";
import Button from "./Button";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const locale = usePathname();
  const t = locale === "/" ? en : ar;
  const { toast } = useToast();
  const motionSettingsleft2right = {
    initial: { opacity: 0, x: -15 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 1 },
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FieldValues>({
    resolver: yupResolver(schema(t)) as any, // Use 'as any' to handle type mismatch

    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      emirate: "",
      eid: "",
      receipt: "",
      lan: locale === "/" ? "en" : "ar",
      selected: false,
      info: " ",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    toast({
      title: t.uploading_data,
      description: "Please wait while we process your registration...",
    });

    try {
      setIsLoading(true);
      data.contentType = data.receipt[0].type;
      data.receiptName = data.receipt[0].name;

      // First, create the database entry and get signed upload URL
      const response = await axios.post("/api/entries", data);
      console.log(response);

      // Upload file to Supabase Storage using signed URL
      const file = data.receipt[0];
      const uploadResponse = await fetch(response.data.uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": file.type,
        },
        body: file,
      });

      if (uploadResponse.ok) {
        console.log(t.upload_successfull);
        toast({
          title: "Success!",
          description: t.submission_completed,
          variant: "default",
        });
        reset();
        setTimeout(() => location.reload(), 1500);
      } else {
        console.log("Supabase Upload Error:", uploadResponse);
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: t.upload_error_message + error,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="register"
      className="w-[90%] md:w-[70%]
    
    md:mt-[8%]  md:mb-[8%]   justify-center items-center  "
    >
      <div className="">
        <div className="right">
          <h2
            className={` text-webWhite text-center uppercase mb-8
          ${
            locale === "/"
              ? "font-BebasNeue text-[47px] md:text-6xl pl-0"
              : "font-NotoKufiArabic-ExtraBold text-4xl md:text-5xl pr-0"
          }
          `}
          >
            {t.registration}
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="pl-4 pr-4 pt-0 mt-1"
          >
            <div className="flex flex-col gap-x-6 gap-y-6 md:gap-y-0 mb-6 md:flex-row justify-evenly">
              <div className="form-field w-full ">
                <Input
                  id="name"
                  label={t.name}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  required
                  type="text"
                />
              </div>
              <div className="form-field w-full">
                <Input
                  id="mobile"
                  label={t.mobile}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  type="text"
                />
              </div>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-6 md:gap-y-0 mb-6 md:flex-row justify-evenly">
              <div className="form-field w-full">
                <Input
                  id="email"
                  label={t.email}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  type="email"
                />
              </div>
              {/* <div className="form-field w-full">
                <Input
                  id="emirate"
                  label={t.emirate}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  type="string"
                />
              </div> */}
              <div
                className={` form-field w-full 
              rounded-full
                ${
                  locale === "/"
                    ? "font-BebasNeue tracking-wider  text-xs"
                    : "font-NotoKufiArabic-Regular font-bold text-sm"
                }
                ${errors.emirate ? "text-webBlack" : "text-webBlue "}
                `}
              >
                <Select
                  dir={`${locale === "/" ? "ltr" : "rtl"}`}
                  disabled={isLoading}
                  onValueChange={(value) => setValue("emirate", value)}
                >
                  <SelectTrigger className="">
                    <SelectValue className="" placeholder={t.emirate} />
                  </SelectTrigger>
                  <SelectContent className="">
                    <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                    <SelectItem value="dubai">Dubai</SelectItem>
                    <SelectItem value="sharjah">Sharjah</SelectItem>
                    <SelectItem value="ajman">Ajman</SelectItem>
                    <SelectItem value="umm-al-quwain">Umm Al Quwain</SelectItem>
                    <SelectItem value="ras-al-khaimah">
                      Ras Al Khaimah
                    </SelectItem>
                    <SelectItem value="fujairah">Fujairah</SelectItem>
                  </SelectContent>
                </Select>
                {errors.emirate && (
                  <p
                    className={` text-webRed
                  ${
                    locale === "/" ? " ml-6 text-xs mt-1" : " mr-6 text-xs mt-1"
                  }`}
                  >
                    {t.emirate_error}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-x-6 gap-y-6 md:gap-y-0 mb-6 md:flex-row justify-evenly">
              <div className="form-field w-full">
                <Input
                  id="eid"
                  label={t.emirate_id_number}
                  disabled={isLoading}
                  register={register}
                  errors={errors}
                  type="text"
                />
              </div>
              <div className="w-full">
                <div className="form-field w-full">
                  <Input
                    id="receipt"
                    label={t.upload_purchase_receipt}
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    type="file"
                  />
                  <div
                    className={`mt-2 ml-2 uppercase text-xs cursor-pointer text-webWhite 
              ${
                locale === "/"
                  ? "font-Circular-Bold"
                  : "font-NotoKufiArabic-Regular"
              }`}
                  >
                    ( {t.max_upload_size} )
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` w-full flex justify-center items-center form-field pt-4 ${
                isLoading ? "animate-pulse" : ""
              }
              ${locale === "/" ? "float-left" : "float-right"}`}
            >
              <Button
                arrow={false}
                outline
                disabled={isLoading}
                label={`${isLoading ? t.form_submit_message : t.register_now}`}
              />
            </div>
            {/* <motion.div {...motionSettingsleft2right} className="registration_image hidden md:block ">
              <Image className="m-auto max-w-[80%]" src={register_bg} alt="registration background" />
            </motion.div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
