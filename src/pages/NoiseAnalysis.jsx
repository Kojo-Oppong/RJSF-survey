import React, { useState } from "react";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button, LinearProgress } from "@mui/material";

// ------------------------------
// STEP SCHEMAS
// ------------------------------

const stepSchemas = [
  {
    title: "1. Business Area",
    schema: {
      type: "object",
      required: ["businessArea"],
      properties: {
        businessArea: {
          type: "string",
          title: "Business Area",
          enum: [
            "Customer Segments",
            "Value Proposition",
            "Channels",
            "Customer Relationships",
            "Revenue Streams",
            "Key Resources",
            "Key Activities",
            "Key Partners",
            "Cost Structure",
          ],
        },
      },
    },
  },

  {
    title: "2. Needs",
    schema: {
      type: "object",
      required: ["needs", "needsImpact"],
      properties: {
        needs: { type: "string", title: "Needs" },
        needsImpact: {
          type: "number",
          title: "Impact (1–10)",
          minimum: 1,
          maximum: 10,
        },
      },
    },
  },

  {
    title: "3. Opportunities",
    schema: {
      type: "object",
      required: ["opportunities", "opportunitiesImpact"],
      properties: {
        opportunities: { type: "string", title: "Opportunities" },
        opportunitiesImpact: {
          type: "number",
          title: "Impact (1–10)",
          minimum: 1,
          maximum: 10,
        },
      },
    },
  },

  {
    title: "4. Improvements",
    schema: {
      type: "object",
      required: ["improvements", "improvementsImpact"],
      properties: {
        improvements: { type: "string", title: "Improvements" },
        improvementsImpact: {
          type: "number",
          title: "Impact (1–10)",
          minimum: 1,
          maximum: 10,
        },
      },
    },
  },

  {
    title: "5. Strengths",
    schema: {
      type: "object",
      required: ["strengths", "strengthsImpact"],
      properties: {
        strengths: { type: "string", title: "Strengths" },
        strengthsImpact: {
          type: "number",
          title: "Impact (1–10)",
          minimum: 1,
          maximum: 10,
        },
      },
    },
  },

  {
    title: "6. Exceptions",
    schema: {
      type: "object",
      required: ["exceptions", "exceptionsImpact"],
      properties: {
        exceptions: { type: "string", title: "Exceptions" },
        exceptionsImpact: {
          type: "number",
          title: "Impact (1–10)",
          minimum: 1,
          maximum: 10,
        },
      },
    },
  },

  {
    title: "7. Actions (Only if Impact ≥ 5)",
    schema: {
      type: "object",
      properties: {
        actions: {
          type: "string",
          title:
            "Actions (Only fill if any previous impact score was 5 or above)",
        },
      },
    },
  },
];

// ------------------------------
// UI SCHEMAS (optional styling)
// ------------------------------

const uiSchemas = stepSchemas.map(() => ({
  "ui:widget": "textarea",
}));

// ------------------------------
// MAIN COMPONENT
// ------------------------------

export default function NoiseAnalysis() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = stepSchemas.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const theme = createTheme({
    palette: {
      primary: { main: "#0f62fe" },
    },
  });

  const handleNext = ({ formData: updated }) => {
    setFormData((prev) => ({ ...prev, ...updated }));
    setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  const handleFinalSubmit = ({ formData: final }) => {
    setFormData((prev) => ({ ...prev, ...final }));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">🎉 Survey Completed</h2>

        <pre className="bg-gray-100 p-4 rounded-md text-sm">
          {JSON.stringify(formData, null, 2)}
        </pre>

        <Button
          variant="contained"
          color="primary"
          className="mt-4"
          onClick={() => {
            setSubmitted(false);
            setStep(0);
            setFormData({});
          }}
        >
          Restart
        </Button>
      </div>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="max-w-3xl mx-auto p-6 shadow-md bg-white rounded-lg mt-8">

        {/* Title */}
        <h1 className="text-2xl font-bold mb-4 text-center">
          Business Model Canvas Assessment
        </h1>

        {/* Progress Bar */}
        <LinearProgress variant="determinate" value={progress} />
        <p className="text-center mt-2 text-gray-600">
          Step {step + 1} of {totalSteps}
        </p>

        {/* Form */}
        <Form
          schema={stepSchemas[step].schema}
          uiSchema={uiSchemas[step]}
          validator={validator}
          formData={formData}
          onSubmit={
            step === totalSteps - 1 ? handleFinalSubmit : handleNext
          }
        >
          <div className="flex justify-between mt-4">
            {step > 0 && (
              <Button variant="outlined" onClick={handlePrev}>
                Previous
              </Button>
            )}

            <Button variant="contained" type="submit">
              {step === totalSteps - 1 ? "Submit" : "Next"}
            </Button>
          </div>
        </Form>
      </div>
    </ThemeProvider>
  );
}
