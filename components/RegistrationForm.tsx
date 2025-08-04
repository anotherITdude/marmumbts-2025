"use client";
import React, { ChangeEvent, useRef } from "react";

import Image from "next/image";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
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
import { Input, FormField } from "@/components/ui/input";

import en from "../locales/en";
import ar from "../locales/ar";
import { usePathname } from "next/navigation";
import Button from "./Button";

// Import new design assets
import registrationLine from "../public/2025/registrationline.png";
import uploadIcon from "../public/2025/upload.png";
import pinIcon from "../public/2025/pin.png";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
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
    resolver: yupResolver(schema(t)) as any,
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue("receipt", [file]);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

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
        setSelectedFile(null);
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
      className="w-[90%] md:w-[70%] md:mt-[8%] md:mb-[8%] justify-center items-center relative"
    >
      {/* Pin Icon */}
      <div className="absolute top-0 right-8 md:right-16 z-10">
        <Image src={pinIcon} alt="Pin" className="w-12 h-12 md:w-16 md:h-16" />
      </div>

      <div className="">
        <div className="right">
          <h2
            className={`text-webBlue text-center uppercase mb-4
          ${
            locale === "/"
              ? "font-Impact text-[47px] md:text-6xl pl-0 text"
              : "font-NotoKufiArabic-ExtraBold text-4xl md:text-5xl pr-0"
          }
          `}
          >
            {t.registration}
          </h2>

          {/* Registration line decoration */}
          <div className="flex justify-center -mt-5 mb-8">
            <Image
              src={registrationLine}
              alt="Registration Line"
              className="max-w-[300px] md:max-w-[400px]"
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="px-4 pt-0 mt-1">
            {/* First Row: Name and Mobile */}
            <div className="flex flex-col gap-6 md:gap-6 mb-6 md:flex-row justify-between">
              <FormField
                error={errors.name ? String(errors.name?.message) : undefined}
              >
                <Input
                  id="name"
                  {...register("name")}
                  disabled={isLoading}
                  placeholder={t.name}
                  type="text"
                  error={!!errors.name}
                />
              </FormField>

              <FormField
                error={
                  errors.mobile ? String(errors.mobile?.message) : undefined
                }
              >
                <Input
                  id="mobile"
                  {...register("mobile")}
                  disabled={isLoading}
                  placeholder={t.mobile}
                  type="text"
                  error={!!errors.mobile}
                />
              </FormField>
            </div>

            {/* Second Row: Email and Emirate */}
            <div className="flex flex-col gap-6 md:gap-6 mb-6 md:flex-row justify-between">
              <FormField
                error={errors.email ? String(errors.email?.message) : undefined}
              >
                <Input
                  id="email"
                  {...register("email")}
                  disabled={isLoading}
                  placeholder={t.email}
                  type="email"
                  error={!!errors.email}
                />
              </FormField>

              <div className="form-field w-full">
                <div className="relative">
                  <Select
                    dir={`${locale === "/" ? "ltr" : "rtl"}`}
                    disabled={isLoading}
                    onValueChange={(value) => setValue("emirate", value)}
                  >
                    <SelectTrigger
                      className={`
                      w-full
                      h-14
                      px-6
                      rounded-full
                      bg-blue-100
                      border-2
                      border-blue-200
                      text-black
                      outline-none
                      transition-all
                      duration-200
                      focus:border-blue-400
                      focus:bg-blue-50
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      ${errors.emirate ? "border-red-500 bg-red-50" : ""}
                      ${
                        locale === "/"
                          ? "font-DINCondensed-Bold tracking-wider text-md"
                          : "font-NotoKufiArabic-Regular text-sm"
                      }
                    `}
                    >
                      <SelectValue placeholder={t.emirate} />
                    </SelectTrigger>
                    <SelectContent className="">
                      <SelectItem value="abu-dhabi">Abu Dhabi</SelectItem>
                      <SelectItem value="dubai">Dubai</SelectItem>
                      <SelectItem value="sharjah">Sharjah</SelectItem>
                      <SelectItem value="ajman">Ajman</SelectItem>
                      <SelectItem value="umm-al-quwain">
                        Umm Al Quwain
                      </SelectItem>
                      <SelectItem value="ras-al-khaimah">
                        Ras Al Khaimah
                      </SelectItem>
                      <SelectItem value="fujairah">Fujairah</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.emirate && (
                    <p
                      className={`text-red-500 text-xs mt-1 ${
                        locale === "/" ? "ml-6" : "mr-6"
                      }`}
                    >
                      {t.emirate_error}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Third Row: Emirates ID and Upload */}
            <div className="flex flex-col gap-6 md:gap-6 mb-6 md:flex-row justify-between">
              <FormField
                error={errors.eid ? String(errors.eid?.message) : undefined}
              >
                <Input
                  id="eid"
                  {...register("eid")}
                  disabled={isLoading}
                  placeholder={t.emirate_id_number}
                  type="text"
                  error={!!errors.eid}
                />
              </FormField>

              {/* Custom Upload Field */}
              <div className="form-field w-full">
                <div className="relative">
                  <div
                    onClick={handleUploadClick}
                    className={`
                      w-full
                      h-14
                      px-6
                      rounded-full
                      bg-blue-100
                      border-2
                      border-blue-200
                      text-gray-700
                      outline-none
                      transition-all
                      duration-200
                      hover:border-blue-400
                      hover:bg-blue-50
                      cursor-pointer
                      flex
                      items-center
                      justify-between
                      disabled:opacity-70
                      disabled:cursor-not-allowed
                      ${errors.receipt ? "border-red-500 bg-red-50" : ""}
                    `}
                  >
                    <span
                      className={`
                      ${selectedFile ? "text-black" : "text-black"}
                      ${
                        locale === "/"
                          ? "font-DINCondensed-Bold tracking-wider text-md"
                          : "font-NotoKufiArabic-Regular text-sm"
                      }
                    `}
                    >
                      {selectedFile
                        ? selectedFile.name
                        : t.upload_purchase_receipt}
                    </span>
                    <div className="flex items-center">
                      <Image
                        src={uploadIcon}
                        alt="Upload"
                        className="w-10  mr-2"
                      />
                    </div>
                  </div>

                  <input
                    ref={fileInputRef}
                    id="receipt"
                    type="file"
                    accept="image/jpeg, image/png"
                    multiple={false}
                    onChange={handleFileChange}
                    disabled={isLoading}
                    className="hidden"
                  />

                  {errors.receipt && (
                    <p
                      className={`text-red-500 text-xs mt-1 ${
                        locale === "/" ? "ml-6" : "mr-6"
                      }`}
                    >
                      {String(errors.receipt?.message)}
                    </p>
                  )}

                  <div
                    className={`mt-2 ml-6 uppercase text-xs text-white ${
                      locale === "/"
                        ? "font-NotoKufiArabic-Regular "
                        : "font-NotoKufiArabic-Regular"
                    }`}
                  >
                    ({t.max_upload_size})
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div
              className={`w-full flex justify-center items-center form-field pt-4 font-DINCondensed-Bold
                 ${isLoading ? "animate-pulse" : ""}`}
            >
              <Button
                arrow={false}
                outline
                disabled={isLoading}
                label={`${isLoading ? t.form_submit_message : t.register_now}`}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
