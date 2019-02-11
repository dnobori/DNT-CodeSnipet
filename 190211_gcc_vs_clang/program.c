#include <stdio.h>
#include <time.h>

typedef	unsigned short		ushort;

typedef	unsigned int		uint;
typedef	unsigned long long	ulong;
typedef	unsigned char		byte;

typedef	unsigned int		bool;
#define	true				1
#define	false				0

#define	null ((void *)0)

int  sprintf(
	char*       const _Buffer,
	char const* const _Format,
	...);

#define	true				1
#define	false				0
typedef	unsigned int		BOOL;
#define	TRUE				1
#define	FALSE				0
typedef	unsigned int		UINT;
typedef	unsigned int		UINT32;
typedef	unsigned int		DWORD;
typedef	signed int			INT;
typedef	signed int			INT32;
typedef	int					UINT_PTR;
typedef	long				LONG_PTR;
typedef	unsigned short		WORD;
typedef	unsigned short		USHORT;
typedef	signed short		SHORT;
typedef	unsigned char		BYTE;
typedef	unsigned char		UCHAR;
typedef signed char			CHAR;
typedef	unsigned long long	UINT64;
typedef signed long long	INT64;


typedef struct VPageTableEntry
{
	byte* RealMemory;
	bool CanRead;
	bool CanWrite;
} VPageTableEntry;

typedef struct VMemory
{
	volatile VPageTableEntry *PageTableEntry;
	volatile byte *ContiguousMemory;
	volatile uint ContiguousStart;
	volatile uint ContiguousEnd;
} VMemory;

typedef struct VCpuState
{
	volatile VMemory *Memory;
	volatile uint Eax, Ebx, Ecx, Edx, Esi, Edi, Ebp, Esp;
	volatile char ExceptionString[256];
	volatile uint ExceptionAddress;
} VCpuState;

UINT g_count = 0;

#include "GeneratedCode.c"


UINT64 Tick64()
{
	struct timespec t = { 0 };
	clock_gettime(CLOCK_MONOTONIC, &t);
	return ((UINT64)((UINT32)t.tv_sec)) * 1000LL + (UINT64)t.tv_nsec / 1000000LL;
}

int main()
{
	uint count = 10;
	uint stackPtr = 0x500000 + 0x10000 / 2;

	VMemory *memory = malloc(sizeof(VMemory));

	memory->ContiguousMemory = malloc(0x8000000 + 0x100000 - 0x500000);
	memory->ContiguousStart = 0x500000;
	memory->ContiguousEnd = memory->ContiguousStart + 0x8000000 + 0x100000 - 0x500000;

	VCpuState *state = malloc(sizeof(VCpuState));
	memset(state, 0, sizeof(VCpuState));

	state->Memory = memory;

	uint ret = 0xffffffff;

	ulong tick_start = Tick64();

	for (uint i = 0;i < count;i++)
	{
		state->Esp = stackPtr;
		state->Esp -= 4;

		*((uint*)(byte*)(memory->ContiguousMemory + state->Esp - memory->ContiguousStart)) = CallRetAddress__MagicReturn;

		Iam_The_IntelCPU_HaHaHa(state, FunctionTable_test_target2);

		if (state->ExceptionString[0] != 0)
		{
			printf("Error: %s at 0x%x.\n", state->ExceptionString, state->ExceptionAddress);
			exit(0);
		}
		else
		{
			uint r = state->Eax;

			if (ret == 0xffffffff)
			{
				ret = r;
				printf("ret = %u\n", state->Eax);
			}
			else if (ret == r) {}
			else
			{
				printf("Error: Invalid result: %u\n", r);
				exit(0);
			}
		}
	}

	ulong tick_end = Tick64();

	printf("time = %u\n", (UINT)((tick_end - tick_start) / count));
	printf("g_count = %u\n", g_count);

	return 0;
}


