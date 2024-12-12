![Logo Image](extra.png)

# React Native Job Listings Mobile Application

This app was created in response to myself being included in a second phase interview where all candidates were tasked with creating a mobile app using react native. Specific instructions were given which I have included below.

# Goals & Objectives

### Objective: To create a job postings application using react native expo.

- Easy to use interface that shows current job descriptions as well as a user profile.
- Pulls live data from City of Palm Coast API and displays each job listing.
- Use react native and expo as the applications foundation. 

# Quick Overview
When approaching this application I wanted to make sure I understood my limitations and strengths. Due to my previous experience as a UI/UX Designer, I found that it was best to start with the logic part of the application as I felt comfortable putting together the UI in a shorter amount of time. For the first 2 - 3 day all of the attention was focused on grabbing the API's data and parsing it into displayable information. Although I encountered a few small snags (such as parsing a description that included HTML Element/Tags) eventually it was correctly showing. Since the data was showing, I figured it was time to start digging into the Front-End side of react native. It definitely shows in the applications design/development that I was learning a bit more with how react native's ui system is built. A lot of design elements, specifically in the JobFetch.tsx file could/should of been turned into multiple components and put together. However due to the deadline approaching, I decided keeping it all in the same file would help me finish the project. Once the page was cohesive(ish) elements the time came to come up with a full app design. My tool of choice for UI/UX development has varied over the years but Figma has been the strongest and easiest to use. Resources such as Dribbble and Behance were used for inspiration, alongside a small side-quest into some light color theory. As the day moved forward, the UI was coming together extremely quickly. Once I had the page figured out, I threw a screenshot up on my other monitor and began my attempt at a 1-1 re-creation in the app. While there was a few hiccups, I managed to adjust my design to overcome my limitations and was able to create an extremely close design. Although everything was coming together quickly it became clear towards the end that the scope for the time allotted to me (1 week) was a bit aggressive and shortcuts had to be made. A part of this was due to the amount of time it took me to get the api's data to transfer from the current view into a modal. By the time this was figured out, I only had about 2 days left and still needed to finish the UI for the modal, resume page and application page. Since I knew that the important functionality was implemented, I decided the best bet was to put the rest of my effort into finishing the design of the application and throwing it into each page as a scaled 1 to 1 photo of what would eventually be there. I believe this turned out to be a reasonable compromise. If you would like to read a more in-depth writing of my journey making this application, I will be posting a post-mortem on braedenloepke.com in the near future.

# Links & Resources
### Mockups
- [Figma Mockups](https://www.figma.com/design/xraYyhkX6u2FdimDsgdhvj/Untitled?node-id=0-1&t=xwcDgGPAClkkCWpk)

### Inspiration
- [Dribbble](https://dribbble.com/)
- [Behance](https://www.behance.net/#)

### Library's 
- [React Native Paper](https://reactnativepaper.com/) - Used sparingly. Thought I would use it more.
- [React Native Render HTML](https://meliorence.github.io/react-native-render-html/) - Super useful and had really good documentation.
- [Axios](https://github.com/qiangmao/axios#readme) - Could of used the fetch() function but found this was a simpler approach to pulling down the API's data.
