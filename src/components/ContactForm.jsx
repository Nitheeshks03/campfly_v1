import { TextInput, Textarea, SimpleGrid, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
function ContactForm() {
  const [value, setValue] = useState(null);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });
  return (
    <>
      <form onSubmit={form.onSubmit(() => {})}>
        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="First name"
            placeholder="Enter your first name"
            name="first name"
            required
            variant="filled"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Last name"
            placeholder="Enter your last name"
            name="last name"
            variant="filled"
            required
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Email"
          placeholder="Enter your email"
          mt="md"
          name="Email"
          variant="filled"
          required
          {...form.getInputProps("subject")}
        />
        <PhoneInput
          placeholder="Enter phone number"
          value={value}
          onChange={setValue}
          className="mt-8"
        />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </form>
      <div className="max-w-[520px] h-[63px] mx-auto">
        <button
          className="w-full h-full bg-[#1ED760] rounded-[10px] font-medium"
        >
          Preview Booking
        </button>
      </div>
    </>
  );
}

export default ContactForm;
