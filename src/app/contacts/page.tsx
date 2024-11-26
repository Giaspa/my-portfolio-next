"use client";

import { useForm } from "react-hook-form";
import Header from "../ui/header";
import Hero from "../ui/hero";
import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";

type FormData = {
  email: string;
  body: string;
  object: string;
};

export default function Contacts() {
  const [isSent, setIsSent] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm<FormData>();

  const hasError: boolean = Object.keys(errors).length > 0;

  function onSubmit(templateForm: FormData) {
    if (!hasError) {
      const { email, object, body } = templateForm;

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
          { reply_to: email, subject: object, message: body },
          process.env.NEXT_PUBLIC_EMAIL_USER_ID
        )
        .then(() => {
          setIsSent(true);
        })
        .catch(() => {
          setIsSent(false);
        });
    }
  }
  function onRetry(event: { preventDefault: () => void; }) {
    event.preventDefault();
    clearErrors(["email", "body", "object"]);
    reset();
  }

  let button;

  if (!isSent && !hasError) {
    button = (
      <button
        type="submit"
        className="btn bg-neutral text-stone-300 border-transparent hover:bg-neutral-content hover:text-white hover:border-transparent hover:animate-pulse lg:w-1/3 self-center lg:self-end"
      >
        Send!
        <i className="fa-regular fa-paper-plane"></i>
      </button>
    );
  } else if (!isSent && hasError) {
    button = (
      <button
        type="button"
        className="btn btn-error border-transparent lg:w-1/3 self-center lg:self-end"
        onClick={onRetry}
      >
        Ops... retry!
        <i className="fa-regular fa-thumbs-down"></i>
      </button>
    );
  } else {
    button = (
      <div className="btn btn-success border-transparent lg:w-1/3 self-center lg:self-end hover:bg-success hover:cursor-default">
        Sent!
        <i className="fa-regular fa-thumbs-up"></i>
      </div>
    );
  }

  return (
    <Hero imagePath="assets/img/Contacts.png">
      <Header white="My" blue="Contacts" />

      <ul className="flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-8 h-full">
        <li className="glass p-4 lg:p-8 flex flex-col gap-2 lg:gap-4 justify-center items-center order-3 lg:order-2">
          <p className="font-mono text-2xl font-semibold">
            <i className="fa-solid fa-phone fa-sm mr-2"></i>
            Phone
          </p>

          <p className="text-lg">+393887436265</p>
        </li>

        <li className="glass p-4 lg:p-8 flex flex-col gap-2 lg:gap-4 justify-center items-center order-4 lg:order-3">
          <p className="font-mono text-2xl font-semibold">
            <i className="fa-solid fa-envelope fa-sm mr-2"></i>
            E-mail
          </p>

          <p className="text-lg">spadazzi.gianluca&#64;gmail.com</p>
        </li>

        <li className="glass p-4 lg:p-8 order-1 lg:order-4">
          <a
            className="h-full flex flex-col justify-center items-center gap-2 lg:gap-4 hover:animate-pulse hover:text-white"
            href="https://www.linkedin.com/in/gianluca-spadazzi/"
            target="_blank"
            rel="noopener"
          >
            <p className="font-mono text-2xl font-semibold ">LinkedIn</p>

            <i className="fa-brands fa-linkedin text-5xl "></i>
          </a>
        </li>

        <li className="glass p-4 lg:p-8 order-2 lg:order-5">
          <a
            className="h-full flex flex-col justify-center items-center gap-2 lg:gap-4 hover:animate-pulse hover:text-white"
            href="https://github.com/Giaspa"
            target="_blank"
            rel="noopener"
          >
            <p className="font-mono text-2xl font-semibold ">GitHub</p>

            <i className="fa-brands fa-github text-5xl "></i>
          </a>
        </li>

        <li className="glass col-span-2 row-span-2 p-4 lg:p-8 flex flex-col gap-4 order-5 lg:order-1">
          <p className="font-mono text-2xl font-semibold">Contact me</p>

          <form
            className="flex-1 flex flex-col gap-4 lg:gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="input input-bordered flex items-center gap-2 glass rounded-md lg:w-1/2 relative">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="email"
                className="grow read-only:cursor-not-allowed"
                placeholder="Insert your email! *"
                readOnly={isSent}
                {...register("email", {
                  required: "Who?",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Sure?",
                  },
                })}
              />

              {errors.email && (
                <small className="text-red-500 absolute mr-4 right-0 top-3">
                  {errors.email.message}
                </small>
              )}
            </label>
            <label className="input input-bordered flex items-center gap-2 glass rounded-md relative ">
              <input
                type="text"
                placeholder="Insert the object! *"
                className="w-full read-only:cursor-not-allowed"
                readOnly={isSent}
                {...register("object", { required: "What?" })}
              />

              {errors.object && (
                <small className="text-red-500 absolute mr-4 right-0 top-3">
                  {errors.object.message}
                </small>
              )}
            </label>
            <label className="flex-1 form-control flex flex-row items-center gap-2 glass rounded-md relative ">
              <textarea
                className="textarea textarea-bordered bg-transparent resize-none flex-1 h-full min-h-52 lg:min-h-8 read-only:cursor-not-allowed"
                placeholder="Let's connect! How can I help you? *"
                readOnly={isSent}
                {...register("body", { required: "How?" })}
              ></textarea>

              {errors.body && (
                <small className="text-red-500 mr-4 absolute right-0 bottom-3 lg:top-3">
                  {errors.body.message}
                </small>
              )}
            </label>

            {button}
          </form>
        </li>
      </ul>
    </Hero>
  );
}
