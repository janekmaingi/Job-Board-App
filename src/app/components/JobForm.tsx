"use client";

import {
  faEnvelope,
  faPhone,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  RadioGroup,
  TextArea,
  TextField,
  Theme,
} from "@radix-ui/themes";
import { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import ImageUpload from "./ImageUpload";

export default function JobForm() {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setstateId] = useState(0);
  const [, setCityId] = useState(0);
  const [countryName, setCountryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");

  function saveJob(data: FormData) {
    "use server";
    data.set("country", countryName.toString());
    data.set("state", stateName.toString());
    data.set("city", cityName.toString());
  }

  return (
    <>
      <Theme>
        <form action={saveJob} className="container mt-6 flex flex-col gap-4">
          <TextField.Root name="title" placeholder="Job title" />

          <div className="grid grid-cols-3 gap-6 *:grow">
            <div>
              Remote?
              <RadioGroup.Root defaultValue="hybrid" name="remote">
                <RadioGroup.Item value="onsite">On-site</RadioGroup.Item>
                <RadioGroup.Item value="hybrid">Hybrid-remote</RadioGroup.Item>
                <RadioGroup.Item value="remote">Fully remotes</RadioGroup.Item>
              </RadioGroup.Root>
            </div>
            <div>
              Full time?
              <RadioGroup.Root defaultValue="full" name="type">
                <RadioGroup.Item value="project">Project</RadioGroup.Item>
                <RadioGroup.Item value="part">Part-time</RadioGroup.Item>
                <RadioGroup.Item value="full">Full-time</RadioGroup.Item>
              </RadioGroup.Root>
            </div>
            <div>
              Salary
              <TextField.Root name="salary">
                <TextField.Slot>$</TextField.Slot>
                <TextField.Slot>k/year</TextField.Slot>
              </TextField.Root>
            </div>
          </div>
          <div>
            <div>
              Location
              <div className="flex gap-4 *:grow">
                <CountrySelect
                  onChange={(e: any) => {
                    setCountryId(e.id);
                    setCountryName(e.name);
                  }}
                  placeHolder="Select Country"
                />
                <StateSelect
                  countryid={countryId}
                  onChange={(e: any) => {
                    setstateId(e.id);
                    setStateName(e.name);
                  }}
                  placeHolder="Select State"
                />
                <CitySelect
                  countryid={countryId}
                  stateid={stateId}
                  onChange={(e: any) => {
                    setCityId(e.id);
                    setCityName(e.name);
                  }}
                  placeHolder="Select City"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-1/3">
              <h3>Job icon</h3>
              <ImageUpload name="JobIcon" icon={faStar} defaultValue={""} />
            </div>
            <div className="grow">
              <h3>Contact person</h3>
              <div className="flex gap-2">
                <div className="">
                  <ImageUpload
                    name="personPhoto"
                    icon={faUser}
                    defaultValue={""}
                  />
                </div>
                <div className="grow">
                  <TextField.Root placeholder="Jane Doe" name="name">
                    <TextField.Slot>
                      <FontAwesomeIcon icon={faUser} />
                    </TextField.Slot>
                  </TextField.Root>
                  <TextField.Root placeholder="Phone" type="tel" name="phone">
                    <TextField.Slot>
                      <FontAwesomeIcon icon={faPhone} />
                    </TextField.Slot>
                  </TextField.Root>
                  <TextField.Root placeholder="Email" type="email" name="email">
                    <TextField.Slot>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </TextField.Slot>
                  </TextField.Root>
                </div>
              </div>
            </div>
          </div>
          <TextArea
            placeholder="Job description"
            resize="vertical"
            name="description"
          />
          <div className="flex justify-center">
            <Button size="3">
              <span className="px-8">Save</span>
            </Button>
          </div>
        </form>
      </Theme>
    </>
  );
}
