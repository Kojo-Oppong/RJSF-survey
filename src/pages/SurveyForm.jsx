import React, { useState } from "react";
import Form from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";


// Define your sections separately
const sections = [
   
    {
        key: "1_CustomerSegments",
        title: "1. Customer Segments",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Did you arrive at your customer segment through research?",
                    enum: ["Yes", "No"],
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'", },

                q2: {
                    type: "string",
                    title: "Do you have a mechanism for continually researching your customers? (Surveys,NPS, Usage data, Website and social media analytics)",
                    enum: ["Yes", "No"],
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "Is (are) your customer segment (s) large enough to sustain exponential growth",
                    enum: ["Yes", "No"],
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q4: {
                    type: "string",
                    title: "Do you have clearly defined customer segments? Are you able to delieanate your customers along demographic, psychographic, geographical, or behavioral lines",
                    enum: ["Yes", "No"],
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q5: {
                    type: "string",
                    title: "Is the competition in your customer segment low?",
                    enum: ["Yes", "No"],
                },
                q5_impact: { type: "number", title: "Impact (1-10)" },
                q5_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q6: {
                    type: "string",
                    title: "Are there other segments or same segments in other geographies you can serve with the same or similar products?",
                    enum: ["Yes", "No"],
                },
                q6_impact: { type: "number", title: "Impact (1-10)" },
                q6_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
            q5_reason: { "ui:widget": "textarea" },
            q6_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "2_ValuePropositions",
        title: "2. Value Propositions",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Does your value proposition address clear needs of your defined customer segments?",
                    enum: ["Yes", "No"],
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q2: {
                    type: "string",
                    title: "Were your user needs identified or validated through thorough research of the users?",
                    enum: ["Yes", "No"],
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "Do you have growing demand for your products",
                    enum: ["Yes", "No"],
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q4: {
                    type: "string",
                    title: "Is demand growing for all your products? Why?",
                    enum: ["Yes", "No"],
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "3_Channels",
        title: "3. Channels",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Are your marketing/sale channels aligned with your customers/users habits?",
                    enum: ["Yes", "No"],
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },

                q2: {
                    type: "string",
                    title: "Do you measure your user engagement with your channels",
                    enum: ["Yes", "No"],
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "Do you track your user engagement using awareness, interest and conversion metrics",
                    enum: ["Yes", "No"],
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q4: {
                    type: "string",
                    title: "Do you use the marketing funnel metrics to make operational and tactical marketing decisions",
                    enum: ["Yes", "No"],
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q5: {
                    type: "string",
                    title: "Do you test the effectiveness of your marketing messages using methods like AB testing?",
                    enum: ["Yes", "No"],
                },
                q5_impact: { type: "number", title: "Impact (1-10)" },
                q5_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
            q5_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "4_CustomerRelationships",
        title: "4. Customer Relationships",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Do you have a clear process for receiving and addressing customer complaints?",
                    enum: ["Yes", "No"],
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'-(Mostly from WhatApp, reaching the founders and complains)" },
                q2: {
                    type: "string",
                    title: "Do your record and track customer complaints?",
                    enum: ["Yes", "No"],
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No' -(We don't have a propoer customer complaints system to record and track them)" },
                q3: {
                    type: "string",
                    title: "Do you have metrics/KPIs to measure the effectiveness of your customer engagement",
                    enum: ["Yes", "No"],
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'-(We don't fully but have some kind of system in place through survey and testimonies and feedback)" },
                q4: {
                    type: "string",
                    title: "Does your business thrive on referrals, do you measure this? (NPS etc.)",
                    enum: ["Yes", "No"],
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q5: {
                    type: "string",
                    title: "Do you analyse customer complaints and feed this back into improving your products and/or services?",
                    enum: ["Yes", "No"],
                },
                q5_impact: { type: "number", title: "Impact (1-10)" },
                q5_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q6: {
                    type: "string",
                    title: "Are your customers able to reach you when they need service or support?",
                    enum: ["Yes", "No"],
                },
                q6_impact: { type: "number", title: "Impact (1-10)" },
                q6_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q7: {
                    type: "string",
                    title: "Do you have customer service/complaints channels  (Chatbot, help desk etc.)",
                    enum: ["Yes", "No"],
                },
                q7_impact: { type: "number", title: "Impact (1-10)" },
                q7_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q8: {
                    type: "string",
                    title: "Do you have a CRM system to manage your customer relationships?",
                    enum: ["Yes", "No"],
                },
                q8_impact: { type: "number", title: "Impact (1-10)" },
                q8_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
            q5_reason: { "ui:widget": "textarea" },
            q6_reason: { "ui:widget": "textarea" },
            q7_reason: { "ui:widget": "textarea" },
            q8_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "5_RevenueStreams",
        title: "5. Revenue Streams",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Does your business have multiple revenue streams?",
                    enum: ["Yes", "No"]
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q2: {
                    type: "string",
                    title: "Have you started earning revenue?",
                    enum: ["Yes", "No"]
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "Is your revenue growing month on month?",
                    enum: ["Yes", "No"]
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },

                q4: {
                    type: "string",
                    title: "Have you done a 5 year revenue forecast?",
                    enum: ["Yes", "No"],
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q5: {
                    type: "string",
                    title: "Assuming you have the capacity, do you see clear potential in your market to earn an annual revenue of up to $10m in 5 years?",
                    enum: ["Yes", "No"]
                },
                q5_impact: { type: "number", title: "Impact (1-10)" },
                q5_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q6: {
                    type: "string",
                    title: "Have you broken even i.e. does your monthly revenue equal or surpasses your running monthly costs?",
                    enum: ["Yes", "No"]
                },
                q6_impact: { type: "number", title: "Impact (1-10)" },
                q6_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q7: {
                    type: "string",
                    title: "Have all your products broken even, if no, is it on track to achieving break even?",
                    enum: ["Yes", "No"]
                },
                q7_impact: { type: "number", title: "Impact (1-10)" },
                q7_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
            q5_reason: { "ui:widget": "textarea" },
            q6_reason: { "ui:widget": "textarea" },
            q7_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "6_KeyResources",
        title: "6. Key Resources",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Do you have enough capacity to support exponential growth in transaction volumes?",
                    enum: ["Yes", "No"]
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q2: {
                    type: "string",
                    title: "Do you always have inventory and/or resources needed to serve your customers?",
                    enum: ["Yes", "No"]
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "You have enough capacity to support your operations and prevent service or supply failures due to lack of or insufficient capacity in key resources?",
                    enum: ["Yes", "No"]
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q4: {
                    type: "string",
                    title: "Have you eliminated single points of failure in your operations including your supply chain?",
                    enum: ["Yes", "No"]
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "7_KeyActivities",
        title: "7. Key Activities",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Have you eliminated any constraints in your operations that are hindering growth in sales?",
                    enum: ["Yes", "No"]
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q2: {
                    type: "string",
                    title: "Have you eliminated all delays in fulfilling customer requests?",
                    enum: ["Yes", "No"]
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "Do you record operational metrics?",
                    enum: ["Yes", "No"]
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q4: {
                    type: "string",
                    title: "Do you present these metrics in a dashboard?",
                    enum: ["Yes", "No"]
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q5: {
                    type: "string",
                    title: "Do you have regular meetings to review these metrics with your team?",
                    enum: ["Yes", "No"]
                },
                q5_impact: { type: "number", title: "Impact (1-10)" },
                q5_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q6: {
                    type: "string",
                    title: "Have you set operational thresholds in the metrics for good performance?",
                    enum: ["Yes", "No"]
                },
                q6_impact: { type: "number", title: "Impact (1-10)" },
                q6_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q7: {
                    type: "string",
                    title: "Do you or your team take corrective action most of the time when the operational thresholds are not met?", enum: ["Yes", "No"]
                },
                q7_impact: { type: "number", title: "Impact (1-10)" },
                q7_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
            q5_reason: { "ui:widget": "textarea" },
            q6_reason: { "ui:widget": "textarea" },
            q7_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "8_KeyPartnerships",
        title: "8. Key Partnerships",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Have you identified key partnerships needed for your business to succeed?",
                    enum: ["Yes", "No"]
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q2: {
                    type:
                        "string",
                    title: "Do you have agreements guiding the delivery of key services or components of your business delivered by others?",
                    enum: ["Yes", "No"]
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "For the key inputs into your business provided by others, do have have alternatives, is the power in the supplier relationships tilted in your favour?",
                    enum: ["Yes", "No"]
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q4: {
                    type: "string",
                    title: "Do your suppliers have enough capacity to support your business operations?",
                    enum: ["Yes", "No"]
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
        },
    },
    {
        key: "9_CostStructure",
        title: "9. Cost Structure",
        schema: {
            type: "object",
            properties: {
                q1: {
                    type: "string",
                    title: "Do you have enough cash to run your operations for the next six months?",
                    enum: ["Yes", "No"]
                },
                q1_impact: { type: "number", title: "Impact (1-10)" },
                q1_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q2: {
                    type: "string",
                    title: "Your operations are not adversely affected by cash flow challenges?", enum: ["Yes", "No"]
                },
                q2_impact: { type: "number", title: "Impact (1-10)" },
                q2_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q3: {
                    type: "string",
                    title: "Do you record all your financial transactions and management reports showing your cashflows?",
                    enum: ["Yes", "No"]
                },
                q3_impact: { type: "number", title: "Impact (1-10)" },
                q3_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q4: {
                    type: "string",
                    title: "Are you able to collect most of the payments for your services or supplies within 30 days?",
                    enum: ["Yes", "No"]
                },
                q4_impact: { type: "number", title: "Impact (1-10)" },
                q4_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q5: {
                    type: "string",
                    title: "Do your suppliers give you goods and services on credit for more than 30 days?",
                    enum: ["Yes", "No"]
                },
                q5_impact: { type: "number", title: "Impact (1-10)" },
                q5_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q6: {
                    type: "string",
                    title: "Have you been able to pay your staff all their salaries for the past 3 months?",
                    enum: ["Yes", "No"]
                },
                q6_impact: { type: "number", title: "Impact (1-10)" },
                q6_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q7: {
                    type: "string",
                    title: "Have you worked out your unit economies?",
                    enum: ["Yes", "No"]
                },
                q7_impact: { type: "number", title: "Impact (1-10)" },
                q7_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q8: {
                    type: "string",
                    title: "Is your LTV/CAC (Life Time Value/Customer Acquisition Costs) ratio higher than 3 times?",
                    enum: ["Yes", "No"]
                },
                q8_impact: { type: "number", title: "Impact (1-10)" },
                q8_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q9: {
                    type: "string",
                    title: "Are you able to negotiate supplier credits?",
                    enum: ["Yes", "No"]
                },
                q9_impact: { type: "number", title: "Impact (1-10)" },
                q9_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'" },
                q10: {
                    type: "string",
                    title: "Can you negotiate lower prices with your current suppliers, maybe by demonstrating higher volumes or sustained repeat orders?",
                    enum: ["Yes", "No"]
                },
                q10_impact: { type: "number", title: "Impact (1-10)" },
                q10_reason: { type: "string", title: "Please give reasons for your response particularly where your response is 'No'"}
            },
        },
        uiSchema: {
            q1_reason: { "ui:widget": "textarea" },
            q2_reason: { "ui:widget": "textarea" },
            q3_reason: { "ui:widget": "textarea" },
            q4_reason: { "ui:widget": "textarea" },
            q5_reason: { "ui:widget": "textarea" },
            q6_reason: { "ui:widget": "textarea" },
            q7_reason: { "ui:widget": "textarea" },
            q8_reason: { "ui:widget": "textarea" },
            q9_reason: { "ui:widget": "textarea" },
            q10_reason: { "ui:widget": "textarea" },
        },
    },
   
];

export default function BusinessSurveyForm() {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({}); // Store all responses

    const step = sections[currentStep];

    const handleNext = (data) => {
        setFormData({ ...formData, [step.key]: data.formData });
        setCurrentStep((prev) => Math.min(prev + 1, sections.length - 1), scrollTo(0, 0));
    };

    const handleBack = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0), scrollTo(0, 0));
    };

    const handleSubmit = () => {
        console.log("Final form data:", formData);
        alert("Survey submitted! Check console for data.");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
            <div className="bg-white text-black p-4 rounded-xl shadow-lg w-full max-w-4xl">
                <h2 className="text-xl font-bold mb-2">{step.title}</h2>
                <Form
                    schema={step.schema}
                    uiSchema={step.uiSchema}
                    validator={validator}
                    formData={formData[step.key] || {}}
                    onSubmit={currentStep === sections.length - 1 ? handleSubmit : handleNext}
                >
                    <div className="flex justify-between mt-4">
                        {currentStep > 0 && (
                            <button
                                type="button"
                                onClick={handleBack}
                                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                            >
                                Previous
                            </button>
                        )}
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 ml-auto"
                        >
                            {currentStep === sections.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
}
