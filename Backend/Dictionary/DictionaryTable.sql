CREATE TABLE [dbo].[DictionaryTable]
(
	[Id] INT IDENTITY,
	[English] NVARCHAR(MAX) NOT NULL,
	[Hungarian] NVARCHAR(MAX) NOT NULL,
	[Spanish] NVARCHAR(MAX) NULL,
	[Chinese] NVARCHAR(MAX) NULL,
	[Portuguese] NVARCHAR(MAX) NULL
)
