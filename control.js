// "Control" by Playboi Carti
// @by raissaji

samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')

setcpm(142/4)

const melody_notes = `<
  [[f#,b,d4]!3 [f#,b,e4]!5]
  [[b,d4,f#4]!5 [f#,b,c#4]!3]
  [[a,d4,g4]!3 [a,d4,f#4]!4 [a,d4,f#4]]
  [[a,d4,f#4]!3 [e,a,c#4]!5]
>`

const bass_notes = `<
  [b2,f#,b]
  [b2,f#,b]
  [d2,d]
  [g2 [a2,a,c#3]]
>`

let melody = note(melody_notes)
  .sound("<triangle,saw,saw>")
  .attack(0.055).decay(0.4).sustain(0.65).room(0.2).roomsize(0.2)
  .lpf(slider(2788, 1000, 15000, 1))
  .lpd(0.5)
  .gain(0.05)
  ._pianoroll()

let pluck = note(`
<
  ~
  [d4 e4 f#4 a4 c#5 d5 e5 f#5]
>
`)
  .sound("piano")
  .attack(0.055)
  .decay(0.6)
  .lpf(1000)
  .gain(0.7)

let bass = note(bass_notes)
  .sound("supersaw").transpose(-12)
  .lpf(slider(247, 100, 3000, 1))
  .gain(0.2)
  ._punchcard()

let drum = note(`<[b2 ~ ~ ~ ~ ~ ~ b2] [~ b2 b2 ~ ~ b2 ~ ~] [d3 ~ ~ d3 ~ ~ d3 ~] [g2 ~ ~ a2 ~ a2 ~ ~]>`)
  .transpose(-12)
  .sound("sine")
  .release(0.5)
  .gain(1)
.distort(1.2)

stack(
  melody,
  bass,
  pluck,
  drum
)