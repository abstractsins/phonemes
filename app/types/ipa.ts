export type IPA =
  // ======================
  // Consonants
  // ======================

  // Plosives (stops)
  | 'p' | 'b' | 't' | 'd' | 'k' | 'g' | 'ʔ'

  // Affricates (simplified forms, no tie-bar)
  | 'ts' | 'dz' | 'tʃ' | 'dʒ'

  // Fricatives
  // — sibilant
  | 's' | 'z' | 'ʃ' | 'ʒ'
  // — non-sibilant (labiodental, dental, glottal, palatal, velar, uvular, lateral)
  | 'f' | 'v' | 'θ' | 'ð' | 'h' | 'ç' | 'ʝ' | 'x' | 'ɣ' | 'χ' | 'ɬ' | 'ɮ' |  'ʁ'

  // Nasals
  | 'm' | 'n' | 'ŋ' | 'ɲ'

  // Approximants (central)
  | 'ɹ' | 'j' | 'w'

  // Lateral approximants
  | 'l' | 'ɫ'

  // Trills / Taps
  | 'r' | 'ɾ' | 'ʀ'

  // ======================
  // Vowels
  // ======================

  // Monophthongs (incl. long vowels)
  | 'i' | 'iː' | 'ɪ' | 'e' | 'ɛ' | 'æ'
  | 'a' | 'ɑ' | 'ɒ' | 'ʌ' | 'ɔ' | 'o'
  | 'u' | 'uː' | 'ʊ' | 'ə' | 'ɜ' | 'ʉ'

  // Diphthongs (English/common)
  | 'aɪ' | 'eɪ' | 'oʊ' | 'aʊ' | 'ɔɪ'
  | 'iə' | 'eə' | 'ʊə' | 'juː'

  // ======================
  // Consonant clusters (sequences; not single phones)
  // ======================
  | 'ks' | 'gz' | 'kw' | 'ʃt' | 'ʒn';
