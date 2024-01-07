import { Bubble } from "~/components/Bubble";

export default function HomePage() {
  return (
    <main>
      <section className="my-4">
        <div className="m-auto flex w-96 flex-col rounded-3xl p-4">
          <Bubble placement="rigth">How is the weather in Quibdó?</Bubble>
          <Bubble placement="left">
            The weather in Quibdo is currently 30°C.
          </Bubble>
          <Bubble placement="rigth">Who is Gabriel García Marquez?</Bubble>
          <Bubble placement="left">
            Gabriel García Márquez was a renowned Colombian writer. He is widely
            regarded as one of the most influential authors of the 20th century.
          </Bubble>
        </div>
      </section>
      <section className="my-8 flex items-center justify-around">
        <div className="flex flex-col items-center">
          <a
            href="tel:+57018005190663"
            className="mb-2 rounded-full bg-green-600 p-2 text-xl"
          >
            +57 (01 800) 519-0663
          </a>
          <p>(in spanish - toll-free)</p>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="tel:+14067327249"
            className="mb-2 rounded-full bg-green-600 p-2 text-xl"
          >
            +1 (406) 732-7249
          </a>
          <p>(in english)</p>
        </div>
      </section>
      <section>
        <p className="my-4">
          llama is a free phone service made for folks in Colombia. you can make
          calls and ask any questions, even if you don't have a regular internet
          connection. the technology behind this project involves TwiML and the
          OpenAI API working in the background. sponsored by Twilio and Vercel.
        </p>
      </section>
    </main>
  );
}
