import { Button } from "./ui/button"
import { Input } from "./ui/input"


interface SubmitInputProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	onSubmit: (s:string) => void
}
        
export default function SubmitInput({ value, setValue, onSubmit }: SubmitInputProps) {
	const onChange = (e:any) => {
    let val = e.target.value;
    setValue(val);
    console.log(val);
	}
	
	const submit = (e: any) => {
		
    if ((e.key && e.key === "Enter" && value.length > 0) || (e.type==="click" && e.target.tagName === "BUTTON")){
			onSubmit(value)
    }
  }

	return (
		<section className="flex flex-row space-x-2">
			<Input value={value} onChange={onChange} onKeyDown={submit} placeholder="UI가 고민되서 걱정인 학부생" />
			<Button onClick={submit}>생성</Button>
		</section>
	)
}