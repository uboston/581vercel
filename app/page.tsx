'use client'
import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'
type Person = {
id?: number
name: string
favorite_color: string
}
export default function Home() {
const [people, setPeople] = useState<Person[]>([])
const [name, setName] = useState('')
const [color, setColor] = useState('')
useEffect(() => {
fetchPeople()
}, [])

async function fetchPeople() {
const { data, error } = await supabase.from('thePeople').select('*')
if (error) {
  console.error(' Error fetching data:', error)
} else {
setPeople(data || [])
}
}
async function addPerson() {
if (!name || !color) return
const { error } = await supabase
.from('thePeople')
.insert([{ name, favorite_color: color }])
if (error) {
console.error('Error inserting data:', error)
  } else {
setName('')
setColor('')
fetchPeople()
}
}

return (
<main className="p-6">
<h1 className="text-2xl font-bold mb-4">Favorite Colors</h1>
<div className="flex gap-2 mb-4">
<input className="border p-2 rounded"
placeholder="Name"
value={name}
onChange={(e) => setName(e.target.value)}/>
<input className="border p-2 rounded"
placeholder="Favorite Color"
value={color}
onChange={(e) => setColor(e.target.value)}
/>
<button
onClick={addPerson}
className="bg-blue-600 text-white px-4 rounded">
Add
</button>
</div>

<ul className="list-disc ml-6">
{people.map((p: Person) => (
<li key={p.id}>
  {p.name} — {p.favorite_color}
</li>
))}
</ul>
</main>
)
}