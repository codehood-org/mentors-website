# Codehood Mentors

**Contents**:

- [Description.](#Description)
- [How It Works.](#How-It-Works)
- How To Register As A Mentor.
- How To Contribute To The Code.
- License.

## Description:

- **Codehood Mentors** is a free mentorship platform - in the development process - for *Arabic* speaking coders. It is meant to a hub for Arab learners who find it difficult to start because of the language barriers, and those who prefer to get explanations in their mother language together with volunteering mentors who want to give back to their community.

- Mentees can search for mentors have good experiences with specific technologies, and mentors from specific Arab countries (in case they find it more comfortable to work with people from their countries or certain countries).

- Mentors are volunteers who accept assigning some flexible time - according to their personal schedule - to teach, technically, and professional support learners, and answer their questions. It is all up to mentors regarding the amount of flexible time they can volunteer, and the number of people they can support.

## How It Works:

- For mentors:
  - Mentors can register themselves by contributing to the `mentors.json` file located inside `src/data`, and make a pull request. The contribution should be a json object with the following fields:
```
  {
    "name": "<Mentor's name>",
    "title": "<Mentor's title>",
    "message": "<A short message to mentees telling them what they expect from you>",
    "skills": ["html", "css", "javascript"],
    "countryAlpha2Code": "EG",
    "country": "Egypt",
    "image": "https:url/image(optional).jpg"
  }
```

  - Here is an example:
```
  {
    "name": "Islam Sayed",
    "title": "full-stack developer",
    "message": "I can help you answer questions and explain difficuilt systems in simple terms.",
    "skills": ["html", "css", "javascript"],
    "countryAlpha2Code": "EG",
    "country": "Egypt",
    "image": "https://uifaces.co/our-content/donated/ukegoVAy.jpg"
  }
```

  - Country Alpha 2 Code: 
        EG: "Egypt"
        DZ: "Algeria"
        SD: "Sudan"
        IQ: "Iraq"
        MA: "Morocco"
        SA: "Saudi Arabia"
        YE: "Yemen"
        SY: "Syria"
        TN: "Tunisia"
        JO: "Jordan"
        AE: "United Arab Emirates"
        LB: "Lebanon"
        LY: "Libya"
        PS: "Palestine"
        OM: "Oman"
        KW: "Kuwait"
        MR: "Mauritania"
        QA: "Qatar"
        BH: "Bahrain"
        DJ: "Djibouti"
        KM: "Comoros"
