// validationSchema.js
import * as yup from "yup";

interface File {
  size: number;
  type: string;
}

export type FormValues = {
  name: string;
  mobile: string;
  email: string;
  emirate: string;
  eid: string;
  lan: string;
  selected: boolean;
  info: string;
  receipt: FileList;
};

export const schema = (t: any) =>
  yup.object().shape({
    name: yup.string().required(t.name_error),
    mobile: yup.string().required(t.mobile_error1).matches(/^\d+$/, t.mobile_error2).min(10, t.mobile_error2),
    email: yup.string().required(t.email_error1).email(t.email_error2),
    emirate: yup.string().required(t.emirate_error),
    eid: yup
      .string()
      .nullable()
      //.required(t.emirate_id_number_error)
      .test("is-number-and-min-digits", t.emirate_id_number_error, (value) => {
        if (!value) {
          return true; // If field is empty, consider it valid
        }

        // Validate if the value is a number with at least 15 digits
        return /^\d{15,}$/.test(value);
      }),
    receipt: yup
      .mixed()
      .required(t.upload_purchase_receipt_error1)
      .test(
        "fileSize",
        t.upload_purchase_receipt_error2,
        (value: any, context) => {
          if (!value || !value[0]) {
            return false; // No file selected, return false to trigger the error
          }

          return value[0].size <= 3000000; // File size limit is 3 MB (3000000 bytes)
        },
      ),
  });
