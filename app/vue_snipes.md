>>Vue Ecosystem Snippets
Snippets for the modern Vue ecosystem - including Nuxt 3, Pinia, VueUse, Vue Router & Vue Macros.

>>Vue Nuxt TypeScript

Features
Only the latest Vue syntax
Over 200 snippets
TypeScript-first
Nuxt 3, Pinia, VueUse, Vue Router & Vue Macros support
Strategically placed tabstops
Prefixes created with exact-match in mind
GitHub Copilot compliant
Auto-generated documentation
Setup
Not mandatory, but highly recommended.

Look for it in user settings, or edit the settings.json directly:

"editor.formatOnSave": true,

// Tab complete snippets when their prefix match.
"editor.tabCompletion": "onlySnippets"

Snippet syntax
Tabstops
$1, $2, $3 specify cursor locations, in order in which tabstops will be visited
$0 denotes the final cursor position
Multiple occurrences of the same tabstop are linked and updated in sync
Placeholders
Tabstops with default values → ${1:name}
Choices
Tabstops with multiple values → ${1|one,two,three|}.
Truncated in documentation, for easier viewing → ${1|one,...|}.

Snippets

Vue SFC
.vue files

Prefix	
vbase	
Vue SFC	
<script lang="ts" setup>$0</script>
<template>$1</template>

vbase:full	
Vue SFC with style | postcss	
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="postcss" scoped>
  
</style>

vbase:full:css	
Vue SFC with style | css	
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="css" scoped>
  
</style>

vbase:full:scss	
Vue SFC with style | scss	
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="scss" scoped>
  
</style>

vbase:full:less	
Vue SFC with style | less	
<script lang="ts" setup>
$0
</script>

<template>
  $1
</template>

<style lang="less" scoped>
  
</style>

vscript	Vue script setup | ts	
<script lang="ts" setup>
$0
</script>

vscript:js	Vue script setup | js	
<script setup>
$0
</script>

vtemplate	Vue template	
<template>
  $0
</template>

vstyle	Vue scoped style | postcss	
<style lang="postcss" scoped>
$0
</style>

vstyle:lang	Vue style with language option	
<style lang="${1|css,postcss,...|}"${2|scoped,|}>
$0
</style>

vstyle:css	Vue scoped style | css	
<style lang="css" scoped>
$0
</style>

vstyle:scss	scoped style | scss	
<style lang="scss" scoped>
$0
</style>

vstyle:less	scoped style | less	
<style lang="less" scoped>
$0
</style>

vstyle:module	Vue style with CSS modules	
<style module$1>
$0
</style>

vstyle:src	Vue scoped style with src	
<style scoped src="$1">
$0
</style>

Template
Prefix	Name	Body
slot	slot	
<slot$1>$0</slot>

template	template	
<template>$0</template>

component	component	
<component>$0</component>

nslot	named slot	
<slot name="${1:default}">
  $0
</slot>

ntemplate	named template	
<template #${1:default}>
  $0
</template>

vcomponent	Vue component	
<component :is="$1">$0</component>

vKeepAlive	Vue KeepAlive	
<KeepAlive $1>
  $0
</KeepAlive>

vTeleport	Vue teleport	
<Teleport to="$1">
  $0
</Teleport>

vTransition	Vue Transition	
<Transition $1>
  $0
</Transition>

vTransition:name / nTransition	Vue Transition with name	
<Transition name="$1" $2>
  $0
</Transition>

vTransition:type	Vue Transition with type	
<Transition type="${1|transition,animation|}" $2>
  $0
</Transition>

vTransition:appear	Vue Transition with appear	
<Transition appear $1>
  $0
</Transition>

vTransitionGroup	Vue TransitionGroup	
<TransitionGroup name="$1" as="${2|ul,div,...|}" $3>
  $0
</TransitionGroup>

vSuspense	Vue Suspense	
<Suspense>
  $0
</Suspense>

vSuspense:fallback	Vue Suspense with fallback	
<Suspense>
  $0
  <template #fallback>
    $1
  </template>
</Suspense>

vtext	v-text	
v-text="$1"

vhtml	v-html	
v-html="$1"

vshow	v-show	
v-show="$1"

vif / if	v-if	
v-if="$1"

velse / else	v-else	
v-else

velif / elif	v-else-if	
v-else-if="$1"

vfor	v-for	
v-for="${2:item} in ${1:items}" :key="$2$3"

vfori	v-for (indexed)	
v-for="(${2:item}, ${3:i}) in ${1:items}" :key="${4:$3}"

vforr	v-for range	
v-for="${1:n} in ${2:5}" :key="$1"

von	v-on	
v-on="${1:emits}"

vbind	v-bind	
v-bind="$1"

vbind:attrs	v-bind attrs	
v-bind="\$attrs"

vbind:props	v-bind props	
v-bind="\$props"

vmodel	v-model	
v-model="$1"

vmodel:number	v-model.number	
v-model.number="$1"

vmodel:trim	v-model.trim	
v-model.trim="$1"

vmodel:custom	custom v-model	
v-model:${1:custom}="$2"

vslot	scoped slot	
v-slot="{$1}"

vpre	v-pre	
v-pre="$1"

vonce	v-once	
v-once

vmemo	v-memo	
v-memo="[$1]"

vcloak	v-cloak	
v-cloak

vkey	Vue key	
:key="$1"

vref	Vue ref	
ref="$1"

vname	name property	
${1|name,:name|}="$2"

vis	is property	
${1|is,:is|}="$2"

vb	bind property	
:${1:prop}="${2:$1}"

vclass / vc	Vue classes	
:class="[$1]"

vclass:cond / vcc	Vue conditional classes	
:class="{ $1: $2 }"

vstyle	Vue inline style	
:style="{ $1: $2 }"

vstyle:list	Vue inline style list	
:style="[$1]"

vti	Vue text interpolation	
{{ $1 }}

vemit	Vue emit event	
@${1|click,input,...|}="\$emit('${2:$1}', \$event)"

vif:slot	v-if slot defined	
v-if="\$slots.${1:default}"

vif:slot-prop	v-if slot or prop defined	
v-if="\$slots.${1:label} || ${2:$1}"

vform	form submit.prevent	
<form @submit${1:.prevent}="${2:onSubmit}">
  $0
</form>

vfor:template	v-for in template	
<${1|template,div,...|} v-for="${3:item} in ${2:items}" :key="$3$4">
  $0
</$1>

vfori:template	v-for (indexed) in template	
<${1|template,div,...|} v-for="(${3:item}, ${4:i}) in ${2:items}" :key="${5:$4}">
  $0
</$1>

vif:template	v-if in template	
<${1|template,div,...|} v-if="$2">
  $0
</$1>

Style
Prefix	Name	Body
vbind	v-bind	
v-bind($0)

deep	:deep()	
:deep($1)

slot	:slotted()	
:slotted($1)

global	:global()	
:global($1)

Script
Script setup and composables

Prefix	Name	Body
vref / vr	Vue ref	
const ${1:name} = ref($2)

vref:ts / vrt	Vue ref (typed)	
const ${1:name} = ref<$2>($3)

vcomputed / vc	Vue computed	
const ${1:name} = computed(() => $2)

vcomputed:ts / vct	Vue computed (typed)	
const ${1:name} = computed<$2>(() => $3)

vcomputed-gs / vcgs	Vue computed (get/set)	
const ${1:name} = computed({
  get: () => ${2},
  set: (${3:value}: ${4:string}) => {
    ${5}
  },
})

vreactive / vra	Vue reactive	
const ${1:name} = reactive({$2})

vreactive:ts	Vue reactive (typed)	
const ${1:name}: ${2:type} = reactive({$3})

vtoRef	Vue toRef	
const ${1:name} = toRef(${2:object}, '$3')

vtoRefs	Vue toRefs	
const ${1:name} = toRefs(${2:object})

vshallowRef	Vue shallowRef	
const ${1:name} = shallowRef($2)

vunref	Vue unref	
const ${1:unwrapped} = unref($2)

vreadonly	Vue readonly	
const ${1:copy} = readonly(${2:object})

vref:elem	Vue element ref	
const ${1:elem} = ref<${2|HTMLInputElement,HTMLInputElement,...|} | null>(null)

vwatchEffect	Vue watchEffect	
watchEffect(() => {
  $0
})

vwatch	Vue watch source	
watch(${1:source}, (${2:val}) => {
  $0
})

vwatch:inline	Vue watch inline	
watch(${1:source}, ${2:fn})

vwatch:getter	Vue watch getter	
watch(() => ${1:source}, (${2:val}) => {
  $0
})

vwatch:multiple	Vue watch multiple	
watch([${1:source1}, ${2:source2}], ([new${1/(.*)/${1:/capitalize}/}, new${2/(.*)/${1:/capitalize}/}]) => {
  $0
})

vwatch:immediate	Vue watch immediate	
watch(${1:source}, (${2:val}) => {
  $0
}, { immediate: true })

vwatch:deep	Vue watch deep	
watch(${1:source}, (${2:val}) => {
  $0
}, { deep: true })

vwatch:log	Vue watch source | log	
watch(${1:source}, (${2:val}) => {
  console.log('$1:', $2)
})

vprops	Vue defineProps	
${1:const props = }defineProps<${2:Props}>()

vprops:defaults	Vue defineProps with defaults	
${1:const props = }withDefaults(defineProps<${2:Props}>(), {
  $0
})

vemits	Vue defineEmits	
${1:const emit = }defineEmits(['$2'])

vemits:ts	Vue defineEmits (typed)	
${1:const emit = }defineEmits<{
  (e: '${2:click}', ${3:payload}: ${4:string}): void,$5
}>()

vemits:new	Vue defineEmits (new syntax)	
${1:const emit = }defineEmits<{
  ${2:click}: [${3:payload}: ${4:string}],$5
}>()

vmodel	Vue defineModel	
const ${1:modelValue} = defineModel<${2:string}>($3)

vemit	Vue emit event	
emit('$1', $2)

vexpose	Vue defineExpose	
defineExpose({
  $1
})

v:onMounted	Vue onMounted	
onMounted(() => {
  $0
})

v:onBeforeMount	Vue onBeforeMount	
onBeforeMount(() => {
  $0
})

v:onUnmounted	Vue onUnmounted	
onUnmounted(() => {
  $0
})

v:onBeforeUnmount	Vue onBeforeUnmount	
onBeforeUnmount(() => {
  $0
})

v:onUpdated	Vue onUpdated	
onUpdated(() => {
  $0
})

v:onBeforeUpdate	Vue onBeforeUpdate	
onBeforeUpdate(() => {
  $0
})

v:onErrorCaptured	Vue onErrorCaptured	
onErrorCaptured(() => {
  $0
})

v:onActivated	Vue onActivated	
onActivated(() => {
  $0
})

v:onDeactivated	Vue onDeactivated	
onDeactivated(() => {
  $0
})

vprovide	Vue provide	
provide(${1:key}, ${2:value})

vprovide:ts	Vue provide (typed)	
provide<${1:string}>(${2:key}, ${3:value})

vinject	Vue inject	
const ${1:value}  = inject(${2:key})

vinject:default	Vue inject with default	
const ${1:value}  = inject(${2:key}, ${3:defaultValue})

vinject:ts	Vue inject (typed)	
const ${1:value} = inject<${2:string}}>(${3:key}, ${4:defaultValue})

vinjectkey	Vue injection key	
const ${1:key} = Symbol('$2') as InjectionKey<${3:string}>

vslots	Vue useSlots	
const slots = useSlots()

vattrs	Vue useAttrs	
const attrs = useAttrs()

vimport	Import from vue	
import { $1 } from 'vue'

Code snippets
Useful vue snippets and helpers

Prefix	Name	Body
vcomposable / vdc	Vue define composable	
export const use${1/(.*)/${1:/capitalize}/} = () => {
  $0
  
  return {
    
  }
}

vuse / vu	Use composable	
const ${2:$1} = use${1/(.*)/${1:/capitalize}/}($3)

vused / vud	Use composable with destructuring	
const { $2 } = use${1/(.*)/${1:/capitalize}/}($3)

vmodel:manual	Implement v-model manually	
const props = defineProps<{
  ${1:modelValue}: ${2:string}
}>()

const emit = defineEmits<{
  (e: 'update:$1', ${3:value}?: $2): void
}>()

const ${4:value} = computed({
  get: () => props.$1,
  set: (val: $2) => emit('update:$1', val),
})

v:has-slot	Vue check for slots	
const slots = useSlots()
const hasSlot = (name: string) => !!slots[name]

Reactivity Transform
Reactivity Transform is currently an experimental feature. It is disabled by default and requires explicit opt-in.

Prefix	Name	Body
vref$	Vue $ref	
const ${1:name} = \$ref($2)

vcomputed$	Vue $computed	
const ${1:name} = \$computed(() => $2)

vcomputed-gs$	Vue $computed (get/set)	
const ${1:name} = \$computed({
  get: () => ${2},
  set: (${3:value}: ${4:type}) => {
    ${5}
  },
})

v$	Vue $() destructuring	
$($1)

v$	Vue $$() escape hint	
$($1)

Vue Router (script)
Prefix	Name	Body
vrouter	Vue router	
const ${1:router} = useRouter()

vroute	Vue route	
const ${1:route} = useRoute()

vrouter:create	Create Vue router	
const router = createRouter({
  history: createWebHashHistory(),
  routes: ${1:routes},
  scrollBehavior(to, from, savedPosition) {
    $2
  }
})

Vue Router (template)
Prefix	Name	Body
vto	Vue Router to	
${1|to,:to|}="$2"

vto:param	Vue Router :to with param	
:to="`$1${${2:id}}$3`"

vto:obj	Vue Router :to object	
:to="{ $1 }"

vto:name	Vue Router :to name	
:to="{ name: '$1',$2 }"

vto:path	Vue Router :to path	
:to="{ path: '$1',$2 }"

vview	RouterView	
<RouterView>
  $0
</RouterView>

vlink	RouterLink	
<RouterLink ${1|to,:to|}="$2">$3</RouterLink>

vlink:param	RouterLink with param	
<RouterLink :to="`$1${${2:id}}$3`">$4</RouterLink>

vlink:obj	RouterLink with object	
<RouterLink :to="{ $1 }">$2</RouterLink>

vlink:name	RouterLink with name	
<RouterLink :to="{ name: '$1'$2 }">$3</RouterLink>

vlink:path	RouterLink with path	
<RouterLink :to="{ path: '$1'$2 }">$3</RouterLink>

Pinia
Prefix	Name	Body
pstore	Setup Pinia store	
import { defineStore } from 'pinia'

export const use${1/(.*)/${1:/capitalize}/} = defineStore('${2:key}', () => {
  $0
  
  return {
   
  }
})

pstore:options	Setup Pinia store (Options)	
import { defineStore } from 'pinia'

export const use${1/(.*)/${1:/capitalize}/} = defineStore('${2:key}', {
  state: () => ({
    
  }),
  getters: {
    
  },
  actions: {
    
  },
})

vuseStore / vus	Use store	
const ${2:$1Store} = use${1/(.*)/${1:/capitalize}/}Store()

Nuxt (script)
Prefix	Name	Body
nfetch	Nuxt useFetch	
const { data: ${1:data} } = await useFetch('$2'$3)

nfetch:cb	Nuxt useFetch with callback	
const { data: ${1:data} } = await useFetch(() => '$2'$3)

nfetch:lazy	Nuxt useLazyFetch	
const { pending, data: ${1:data} } = useLazyFetch('$2'$3)

nfetch:lazy:cb	Nuxt useLazyFetch callback	
const { pending, data: ${1:data} } = useLazyFetch(() => '$2'$3)

nfetch:post	Nuxt useFetch POST	
const { data: ${1:data} } = await useFetch('$2', {
  method: 'POST',
  body: ${3:body},$4
})

nasyncdata	Nuxt useAsyncData	
const { data: ${1:data} } = await useAsyncData('${2:key}', () => $fetch('$3')$4)

nasyncdata:lazy	Nuxt useLazyAsyncData	
const { pending, data: ${1:data} } = useLazyAsyncData('${2:key}', () => $fetch('$3')$4)

napp	Nuxt useNuxtApp	
const app = useNuxtApp()

nappConfig	Nuxt useAppConfig	
const appConfig = useAppConfig()

nruntimeConfig	Nuxt useRuntimeConfig	
const config = useRuntimeConfig()

ncookie	Nuxt useCookie	
const ${1:cookie} = useCookie('${2:$1}'$3)

ncookie:opts	Nuxt useCookie with options	
const ${1:cookie} = useCookie('${2:$1}', { $3 })

ndata	Nuxt useNuxtData	
const { data: ${2:$1} } = useNuxtData('${1:key}')

nerror	Nuxt useError	
const ${1:error} = useError()

nstate	Nuxt useState	
const ${1:state} = useState('${2:$1}'$3)

nstate:init	Nuxt useState (init)	
const ${1:state} = useState('${2:$1}', () => $3)

nhead	Nuxt useHead	
useHead({
  $1
})

nhead:title	Nuxt useHead title	
useHead({
  title: $1,$0
})

npageMeta	Nuxt definePageMeta	
definePageMeta({
  $1
})

npageMeta:title	Nuxt definePageMeta title	
definePageMeta({
  title: '$1',$0
})

npageMeta:layout	Nuxt definePageMeta layout	
definePageMeta({
  layout: '$1',$0
})

npageMeta:middleware	Nuxt definePageMeta middleware	
definePageMeta({
  middleware: ['$1'$2],$0
})

nto	Nuxt navigateTo	
navigateTo('$1'$2)

nto:obj	Nuxt navigateTo object	
navigateTo({ $1 }$2)

nto:replace	Nuxt navigateTo replace	
navigateTo('$1', { replace: true })

nto:external	Nuxt navigateTo external	
navigateTo('$1', { external: true })

nto:redirect	Nuxt navigateTo redirect	
navigateTo('$1', { redirectCode: ${2|301,302,...|} })

nto:name	Nuxt navigateTo name	
navigateTo({
  name: '$1',$0
})

nto:path	Nuxt navigateTo path	
navigateTo({
  path: '$1',$0
})

nplugin	Nuxt plugin	
export default defineNuxtPlugin((nuxtApp) => {
  $1
})

nplugin:vue	Nuxt plugin use vue package	
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use($1)
})

nmiddleware:route	Nuxt route middleware	
export default defineNuxtRouteMiddleware((to, from) => {
  $1
})

nmiddleware:server	Nuxt server middleware	
export default defineEventHandler((event) => {
  $1
})

napi	Nuxt api route	
export default defineEventHandler(${1:async }(event) => {
  $2
  
  return {
    $3
  }
})

nplugin:server	Nuxt server plugin	
export default defineNitroPlugin((nitroApp) => {
  $1
})

nreadBody	Nuxt readBody	
const ${1:body} = await readBody(event)

ngetQuery	Nuxt getQuery	
const { $1 } = getQuery(event)

ngetCookie	Nuxt getCookie	
getCookie(event, '${1:cookie}')

nsetCookie	Nuxt setCookie	
setCookie(event, '${1:cookie}', ${2:value})

Nuxt (template)
Prefix	Name	Body
nlink	NuxtLink	
<NuxtLink ${1|to,:to|}="$2">$3</NuxtLink>

nlink:blank	NuxtLink with target _blank	
<NuxtLink ${1|to,:to|}="$2" target="_blank" $3>$4</NuxtLink>

nlink:external	NuxtLink with target external	
<NuxtLink ${1|to,:to|}="$2" external target="${3|_blank,_self|}" $4>$5</NuxtLink>

nlink:param	NuxtLink with param	
<NuxtLink :to="`$1${${2:id}}$3`" $4>$5</NuxtLink>

nlink:obj	NuxtLink with object	
<NuxtLink :to="{ $1 }" $2>$3</NuxtLink>

nlink:name	NuxtLink with name	
<NuxtLink :to="{ name: '$1'$2 }" $3>$4</NuxtLink>

nlink:path	NuxtLink with path	
<NuxtLink :to="{ path: '$1'$2 }" $3>$4</NuxtLink>

nloading	NuxtLoadingIndicator	
<NuxtLoadingIndicator $1/>

nlayout	NuxtLayout	
<NuxtLayout $1>$2</NuxtLayout>

nlayout:name	NuxtLayout with name	
<NuxtLayout ${2|name,:name|}="$3">$4</NuxtLayout>

npage	NuxtPage	
<NuxtPage $1/>

npage:static	NuxtPage with static key	
<NuxtPage page-key="static" $1/>

nclient	ClientOnly	
<ClientOnly $1>$2</ClientOnly>

nclient:fallbacks	ClientOnly with fallback props	
<ClientOnly fallback-tag="${1:span}" fallback="${2:Loading...}">$3</ClientOnly>

nclient:fallback	ClientOnly with fallback template	
<ClientOnly>
  <template #fallback>
    $0
  </template>
</ClientOnly>

nTeleport	Nuxt Teleport	
<Teleport to="$1">
  $0
</Teleport>

VueUse (script)
Prefix	Name	Body
vwatchArray	VueUse watchArray	
watchArray(${1:list}, (new${1/(.*)/${1:/capitalize}/}, old${1/(.*)/${1:/capitalize}/}, ${4:added}, ${5:removed}) => {
  $0
})

vwatchAtMost	VueUse watchAtMost	
watchAtMost(${1:source}, (${2:val}) => {
  $0
}, { max: ${3:3} })

vwatchDebounced	VueUse watchDebounced	
watchDebounced(${1:source}, (${2:val}) => {
  $0
}, { debounce: ${3:500}, maxWait: ${4:1000} })

vwatchIgnorable	VueUse watchIgnorable	
const { stop:$3, ignoreUpdates:$4 } =  = watchIgnorable(${1:source}, (${2:val}) => {
  $0
})

vwatchOnce	VueUse watchOnce	
watchOnce(${1:source}, (${2:val}) => {
  $0
})

vwatchPausable	VueUse watchPausable	
const { stop$3, pause$4, resume$5 } = watchPausable(${1:source}, (${2:val}) => {
  $0
})

vwatchThrottled	VueUse watchThrottled	
watchThrottled(${1:source}, (${2:val}) => {
  $0
}, { throttle: ${3:500} })

vwatchTriggerable	VueUse watchTriggerable	
const { trigger$3, ignoreUpdates$4 } = watchTriggerable(${1:source}, (${2:val}) => {
  $0
})

vwatchWithFilter	VueUse watchWithFilter	
watchWithFilter(${1:source}, (${2:val}) => {
  $0
}, { eventFilter: $3 })

vwhenever	VueUse whenever	
whenever(${1:source}, (${2:val}) => {
  $0
})

vuse:vmodel	Implement v-model using useVModel	
const ${2:value} = useVModel(props, '${1:modelValue}', emit)

vuse:vmodels	Implement v-model using useVModels	
const { ${1:modelValue}$2 } = useVModels(props, emit)

vuse:hover	VueUse useElementHover	
const ${1:elem} = ref<${2|HTMLInputElement,HTMLDivElement,...|} | null>(null)
const ${3:isHovered} = useElementHover($1)

vuse:fetch / vuf	VueUse useFetch	
const { data: ${1:data} } = useFetch('$2'$3)

vget	VueUse get	
get($1)

vset	VueUse set	
set($1, $2)

vdef	VueUse isDefined	
isDefined($1)

vuse:toggle	VueUse useToggle	
const [${1:value}, ${2:toggle}] = useToggle()

vuse:toggle:fn	VueUse useToggle function	
const toggle${2/(.*)/${1:/capitalize}/} = useToggle($1)

Vue Macros
Prefix	Name	Body
vdefineModels / vmacro:model	Define models	
const { modelValue$2 } = defineModels<{
  modelValue: ${1:string}
}>()

vdefinePropsRefs / vmacro:props	Define props refs	
const { $2 } = definePropsRefs<{
  $1
}>()

vdefineOptions / vmacro:options	Define options	
defineOptions({
  $0
})

vdefineSlots / vmacro:slots	Define slots	
defineSlots<{
  $0
}>()

vdefineRender / vmacro:render	Define render	
defineRender(
  $0
)

vdefineRender:fn / vmacro:render:fn	Define render function	
defineRender(() => {
  return (
    $0
  )
})

Running locally
# ensure Deno is installed
# https://deno.land/manual@v1.29.1/getting_started/installation

# generate .code-snippets and documentation
deno task generate