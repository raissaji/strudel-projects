// Silly first project
// @by raissaji

samples('https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/strudel.json')

setcpm(190 / 4)

let synth = note(`
<[bb3,db4,gb4] [ab3,db4,f4] [db4,f4,bb3,db4] [eb2,ab3,db4,eb4]>
`)
  .sound("sawtooth")
  .lpf(slider(869, 100, 2000, 1))

let kick = sound("popkick:1")
  .struct("x ~ x ~ x ~ x ~")
  .slow(2)
  .lpf(600)

let bass_synth = note("<bb ab db eb>")
  .transpose(-12)
  .lpf(slider(414, 100, 2000, 1))
  .sound("supersaw")
  .attack(0.5)

let trap_bass = note("<bb1>")
  .sound("bass3:8")
  .struct("<[x ~ ~ ~ ~ ~ ~ ~] [x ~ ~ x ~ ~ x ~]>")

stack(
  bass_synth,
  trap_bass,
  kick,
  synth
)