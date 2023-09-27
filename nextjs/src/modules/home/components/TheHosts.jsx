import styled from 'styled-components';
import { MixinSectionHeading } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';

const TheHosts = () => (
  <StyledTheHosts>
    <div className="flex flex-col mx-8 md:mx-16 gap-8">
      <div className="section-heading__wrapper">
        <h3 className="section-heading">About Altus Talks</h3>
      </div>
      <p className="text-5xl font-bold leading-normal">
        Altus Talks is a podcast, self-produced by 6th, 7th and 8th graders at Altus Academy.
      </p>
      <p className="text-3xl leading-normal">
        We interview leaders in industry and in our community. We cover topics ranging from personal interest to career
        advice.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-11 text-3xl gap-16">
        <div className="col-span-1 md:col-span-5 flex flex-col gap-2">
          <p className="text-3xl leading-normal font-semibold">We love to ask our guests about:</p>
          <ul className="list-disc ml-8 leading-normal">
            <li>their careers</li>
            <li>their dreams & goals</li>
            <li>and for the advice they wish they could give to their 6th, 7th and 8th grade selves.</li>
          </ul>
        </div>
        <div className="hidden md:col-span-1 md:flex flex-col items-center justify-center">
          <VerticalDivider />
        </div>
        <div className="col-span-1 md:col-span-5 flex flex-col gap-2">
          <p className="text-3xl leading-normal font-semibold">We love to brag to our guests about:</p>
          <ul className="list-disc ml-8 leading-normal">
            <li>what we’re learning in school</li>
            <li>what we want to do with our lives</li>
            <li>and how we want to positively impact the world</li>
          </ul>
        </div>
      </div>

      {/* amy */}
      {/* <PersonBio
      className="amy"
      avatar="/images/amy.png"
      firstName="Amy"
      lastName="Dutton"
      jobTitle="Director of Design"
      largeBody="I love️ teaching designers how to code and developers how to design."
      body="I'm a UI / UX designer and full-stack developer. I have over 20 years of web experience, officially making me a granny in Internet years. I live in Nashville, TN with my husband, 3 adorable kids, and 2 dogs. If I'm not sitting in front of my computer making things, I'm hanging out with family and friends. I love streaming all the things, playing cards, reading, and drinking coffee. Lots of coffee."
      twitter="http://twitter.com/selfteachme"
      instagram="http://instagram.com/selfteachme"
      github="http://github.com/ahaywood"
      youtube="http://youtube.com/c/selfteachme"
      twitch="http://twitch.com/selfteachme"
      website="https://selfteach.me/"
    /> */}
    </div>
  </StyledTheHosts>
);

const StyledTheHosts = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  margin: 60px auto;
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;

  // @media (${Breakpoints.medium}) {
  //   grid-template-columns: repeat(2, minmax(0, 1fr));
  // }

  .section-heading__wrapper {
    margin-bottom: 60px;
    text-align: center;
    width: 100%;

    // @media (${Breakpoints.medium}) {
    //   grid-column: span 2;
    // }
  }

  .section-heading {
    ${MixinSectionHeading}
  }

  .james,
  .amy {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 ${(props) => props.theme.mobilePadding};
  }

  .james {
    @media (${Breakpoints.medium}) {
      border-right: 1px solid ${(props) => props.theme.white};
      padding-right: 85px;
    }

    @media (${Breakpoints.regular}) {
      padding-left: 0;
    }
  }

  .amy {
    @media (${Breakpoints.medium}) {
      padding: 0 ${(props) => props.theme.mobilePadding} 0 85px;
    }

    @media (${Breakpoints.regular}) {
      padding-right: 0;
    }
  }
`;

export { TheHosts };
