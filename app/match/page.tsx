"use client";

import { FormEvent, useState } from "react";
import { FaLink, FaQrcode } from "react-icons/fa";
import SwipeableViews from "react-swipeable-views";
import lzstring from "lz-string";
import QRCode from "react-qr-code";

import Button from "@/components/button";
import ContentTile from "@/components/contenttile";
import Header from "@/components/header";
import Label from "@/components/label";
import TextField from "@/components/textfield";
import Counter from "@/components/counter";
import CounterSection from "@/components/countersection";
import Position from "@/components/positionsection";
import { Radio, RadioGroup } from "@/components/radio";
import Checkbox from "@/components/checkbox";

export default function Match() {
  const [currentTile, setCurrentTile] = useState(0);
  const slideCount = 6;
  const [data, setData] = useState(null as Record<string, string> | null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    let _data: Record<string, string> = {};

    for (let [key, value] of formData.entries()) {
      _data[key] = value as string;
    }

    console.log(_data);
    setData(_data);
  };

  return (
    <>
      <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
        <SwipeableViews
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
          containerStyle={{ flex: 1 }}
          onChangeIndex={setCurrentTile}
          // disableLazyLoading
        >
          <Prematch />
          <Auto />
          <Teleop />
          <Endgame />
          <Postmatch />
          <Submit data={data} />
        </SwipeableViews>
      </form>
      <div className="flex absolute w-screen bottom-0 justify-center pb-5 gap-2">
        {Array.from({ length: slideCount }, (_, i) => i).map((i) => (
          <div
            key={i}
            className={
              "h-2 aspect-square rounded-full transition-colors duration-300 " +
              (i === currentTile ? "bg-gray-300" : "bg-gray-500")
            }
          />
        ))}
      </div>
    </>
  );
}

function Prematch() {
  return (
    <ContentTile>
      <Header title="prematch" />
      <TextField label="Scouter Name" id="scouter" />
      <TextField label="Match Number" id="match" numeric />
      <TextField label="Team Number" id="team" numeric />
      <Label text="Position" />
      <fieldset className="flex justify-between">
        <Position color="r" number="1" />
        <Position color="r" number="2" />
        <Position color="r" number="3" />
        <Position color="b" number="1" />
        <Position color="b" number="2" />
        <Position color="b" number="3" />
      </fieldset>
    </ContentTile>
  );
}

function Auto() {
  return (
    <ContentTile>
      <Header title="auto" />

      <RadioGroup name="Starting Location">
        <Radio name="start" value="left">
          Left
        </Radio>
        <Radio name="start" value="center">
          Center
        </Radio>
        <Radio name="start" value="right">
          Right
        </Radio>
      </RadioGroup>

      <Label text="Mobility" />
      <Checkbox name="mobility" id="mobility" />

      <div className="flex justify-evenly">
        <CounterSection height="low" phase="auto" />
        <CounterSection height="mid" phase="auto" />
        <CounterSection height="high" phase="auto" />
      </div>
      <RadioGroup name="Parking">
        <Radio name="parking" value="none">
          None
        </Radio>
        <Radio name="parking" value="docked">
          Docked
        </Radio>
        <Radio name="parking" value="engaged">
          Engaged
        </Radio>
      </RadioGroup>
    </ContentTile>
  );
}

function Teleop() {
  return (
    <ContentTile>
      <Header title="teleop" />
      <div className="flex justify-evenly">
        <CounterSection height="low" phase="teleop" />
        <CounterSection height="mid" phase="teleop" />
        <CounterSection height="high" phase="teleop" />
        <div className="flex flex-col text-center gap-1">
          <Label text="Links" />
          <Counter
            height="low"
            measuring="links"
            icon={FaLink}
            phase="teleop"
          />
        </div>
      </div>
      <RadioGroup name="Pick-up Location">
        <Radio name="pickup" value="NA">
          NA
        </Radio>
        <Radio name="pickup" value="Ground">
          Ground
        </Radio>
        <Radio name="pickup" value="Substation">
          Substation
        </Radio>
        <Radio name="pickup" value="Both">
          Both
        </Radio>
      </RadioGroup>
    </ContentTile>
  );
}

function Endgame() {
  return (
    <ContentTile>
      <Header title="endgame" />
      <RadioGroup name="Parking">
        <Radio name="endgame" value="None">
          None
        </Radio>
        <Radio name="endgame" value="Parked">
          Parked
        </Radio>
        <Radio name="endgame" value="Docked">
          Docked
        </Radio>
        <Radio name="endgame" value="Engaged">
          Engaged
        </Radio>
      </RadioGroup>
    </ContentTile>
  );
}

function Postmatch() {
  return (
    <ContentTile>
      <Header title="postmatch" />
      <RadioGroup name="Driver">
        <Radio name="driver" value="Bad">
          Bad
        </Radio>
        <Radio name="driver" value="OK">
          OK
        </Radio>
        <Radio name="driver" value="Good">
          Good
        </Radio>
      </RadioGroup>
      <RadioGroup name="Defense">
        <Radio name="defense" value="Bad">
          Bad
        </Radio>
        <Radio name="defense" value="OK">
          OK
        </Radio>
        <Radio name="defense" value="Good">
          Good
        </Radio>
      </RadioGroup>
    </ContentTile>
  );
}

interface SubmitProps {
  data: Record<string, string> | null;
}

function Submit({ data }: SubmitProps) {
  return (
    <ContentTile>
      {/* <Header title="submit" /> */}
      <Button submit>
        <FaQrcode />
        Create QR Code
      </Button>
      {data && (
        <QRCode
          value={lzstring.compressToBase64(JSON.stringify(data))}
          size={300}
          className="w-full aspect-square"
        />
      )}
    </ContentTile>
  );
}
